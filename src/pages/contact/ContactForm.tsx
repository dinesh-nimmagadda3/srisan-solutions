import { useState, useCallback, useEffect } from 'react';
import { Send, AlertCircle, Check } from 'lucide-react';
import type { FormData, FormErrors, FormTouched } from '../../types/contact';
import {
  validateForm,
  formatPhoneNumber,
  generateCSRFToken,
} from '../../utils/validation';

interface ContactFormProps {
  onSuccess: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    website: '',
    csrf_token: '',
    form_time: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<FormTouched>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Initialize form security tokens on component mount
  useEffect(() => {
    const csrfToken = generateCSRFToken();
    const formTime = Math.floor(Date.now() / 1000).toString();

    setFormData(prev => ({
      ...prev,
      csrf_token: csrfToken,
      form_time: formTime,
    }));
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;

      let processedValue = value;
      if (name === 'phone') {
        processedValue = formatPhoneNumber(value);
      }

      setFormData(prev => ({
        ...prev,
        [name as keyof FormData]: processedValue,
      }));

      // Clear error when user starts typing
      const formErrorKeys: Array<keyof FormErrors> = [
        'name',
        'email',
        'company',
        'phone',
        'message',
      ];
      if (
        formErrorKeys.includes(name as keyof FormErrors) &&
        errors[name as keyof FormErrors]
      ) {
        setErrors(prev => ({
          ...prev,
          [name as keyof FormErrors]: '',
        }));
      }

      // Clear submit error
      if (submitError) {
        setSubmitError('');
      }
    },
    [errors, submitError]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name } = e.target;
      const formTouchedKeys: Array<keyof FormTouched> = [
        'name',
        'email',
        'company',
        'phone',
        'message',
      ];
      if (formTouchedKeys.includes(name as keyof FormTouched)) {
        setTouched(prev => ({
          ...prev,
          [name as keyof FormTouched]: true,
        }));
      }

      // Validate field on blur
      const fieldErrors = validateForm(formData);
      const formErrorKeys: Array<keyof FormErrors> = [
        'name',
        'email',
        'company',
        'phone',
        'message',
      ];
      if (
        formErrorKeys.includes(name as keyof FormErrors) &&
        fieldErrors[name as keyof FormErrors]
      ) {
        setErrors(prev => ({
          ...prev,
          [name as keyof FormErrors]: fieldErrors[name as keyof FormErrors],
        }));
      }
    },
    [formData]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side honeypot check
    if (formData.website) {
      console.log('Bot detected');
      return;
    }

    // Validate all fields
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setTouched({
        name: true,
        email: true,
        phone: true,
        message: true,
        company: true,
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Create FormData for PHP
      const phpFormData = new FormData();
      phpFormData.append('name', formData.name);
      phpFormData.append('email', formData.email);
      phpFormData.append('company', formData.company);
      phpFormData.append('phone', formData.phone);
      phpFormData.append('message', formData.message);
      phpFormData.append('website', formData.website);
      phpFormData.append('csrf_token', formData.csrf_token);
      phpFormData.append('form_time', formData.form_time);

      const response = await fetch('/contact.php', {
        method: 'POST',
        body: phpFormData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to send message');
      }

      onSuccess();
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Failed to send message. Please try again or contact us directly at info@srisan.com.'
      );
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldStatus = (fieldName: keyof FormData) => {
    const validFormFields: Array<keyof FormErrors> = [
      'name',
      'email',
      'company',
      'phone',
      'message',
    ];
    if (!validFormFields.includes(fieldName as keyof FormErrors)) {
      return 'default';
    }

    if (errors[fieldName as keyof FormErrors]) return 'error';
    if (touched[fieldName as keyof FormTouched] && formData[fieldName] !== '')
      return 'success';
    return 'default';
  };

  const getFieldClasses = (fieldName: keyof FormData) => {
    const status = getFieldStatus(fieldName);
    const baseClasses =
      'w-full px-4 py-3 border rounded-lg transition-all duration-200';

    switch (status) {
      case 'error':
        return `${baseClasses} border-red-500 focus:ring-2 focus:ring-red-500 focus:border-red-500`;
      case 'success':
        return `${baseClasses} border-green-500 focus:ring-2 focus:ring-green-500 focus:border-green-500`;
      default:
        return `${baseClasses} border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500`;
    }
  };

  const characterCount = formData.message.length;
  const maxCharacters = 500;

  return (
    <div className='bg-white rounded-2xl p-8 shadow-lg'>
      <div className='mb-8'>
        <h3 className='text-2xl font-bold text-gray-900 mb-2'>
          Send us a Message
        </h3>
        <p className='text-gray-600'>
          Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </div>

      <div className='space-y-6'>
        {/* Honeypot field */}
        <div className='hidden' aria-hidden='true'>
          <label htmlFor='website'>Website (leave blank)</label>
          <input
            type='text'
            id='website'
            name='website'
            value={formData.website}
            onChange={handleInputChange}
            tabIndex={-1}
            autoComplete='off'
          />
        </div>

        {/* Error Alert */}
        {submitError && (
          <div className='bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3'>
            <AlertCircle className='w-5 h-5 text-red-500 flex-shrink-0 mt-0.5' />
            <div>
              <h4 className='text-red-800 font-medium'>Submission Error</h4>
              <p className='text-red-700 text-sm mt-1'>{submitError}</p>
            </div>
          </div>
        )}

        <div className='grid md:grid-cols-2 gap-6'>
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-700 mb-2'
            >
              Full Name *
            </label>
            <div className='relative'>
              <input
                type='text'
                id='name'
                name='name'
                required
                value={formData.name}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={getFieldClasses('name')}
                placeholder='John Doe'
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {getFieldStatus('name') === 'success' && (
                <Check className='absolute right-3 top-3 w-5 h-5 text-green-500' />
              )}
            </div>
            {errors.name && (
              <p
                id='name-error'
                className='text-red-600 text-sm mt-1 flex items-center'
              >
                <AlertCircle className='w-4 h-4 mr-1' />
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700 mb-2'
            >
              Email Address *
            </label>
            <div className='relative'>
              <input
                type='email'
                id='email'
                name='email'
                required
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={getFieldClasses('email')}
                placeholder='john@company.com'
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {getFieldStatus('email') === 'success' && (
                <Check className='absolute right-3 top-3 w-5 h-5 text-green-500' />
              )}
            </div>
            {errors.email && (
              <p
                id='email-error'
                className='text-red-600 text-sm mt-1 flex items-center'
              >
                <AlertCircle className='w-4 h-4 mr-1' />
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-6'>
          <div>
            <label
              htmlFor='company'
              className='block text-sm font-medium text-gray-700 mb-2'
            >
              Company
            </label>
            <div className='relative'>
              <input
                type='text'
                id='company'
                name='company'
                value={formData.company}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={getFieldClasses('company')}
                placeholder='Your Company'
              />
              {getFieldStatus('company') === 'success' && (
                <Check className='absolute right-3 top-3 w-5 h-5 text-green-500' />
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor='phone'
              className='block text-sm font-medium text-gray-700 mb-2'
            >
              Phone Number
            </label>
            <div className='relative'>
              <input
                type='tel'
                id='phone'
                name='phone'
                value={formData.phone}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={getFieldClasses('phone')}
                placeholder='+44 1234 567890'
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {getFieldStatus('phone') === 'success' && (
                <Check className='absolute right-3 top-3 w-5 h-5 text-green-500' />
              )}
            </div>
            {errors.phone && (
              <p
                id='phone-error'
                className='text-red-600 text-sm mt-1 flex items-center'
              >
                <AlertCircle className='w-4 h-4 mr-1' />
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor='message'
            className='block text-sm font-medium text-gray-700 mb-2'
          >
            Message *
          </label>
          <div className='relative'>
            <textarea
              id='message'
              name='message'
              required
              rows={6}
              value={formData.message}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`${getFieldClasses('message')} resize-y`}
              placeholder='Tell us about your SAP requirements, project timeline, current challenges, and how we can help...'
              maxLength={maxCharacters}
              aria-describedby={
                errors.message ? 'message-error' : 'message-count'
              }
            />
            {getFieldStatus('message') === 'success' && (
              <Check className='absolute right-3 top-3 w-5 h-5 text-green-500' />
            )}
          </div>
          <div className='flex justify-between items-center mt-1'>
            {errors.message ? (
              <p
                id='message-error'
                className='text-red-600 text-sm flex items-center'
              >
                <AlertCircle className='w-4 h-4 mr-1' />
                {errors.message}
              </p>
            ) : (
              <div></div>
            )}
            <p
              id='message-count'
              className={`text-sm ${
                characterCount > maxCharacters * 0.9
                  ? 'text-orange-600'
                  : 'text-gray-500'
              }`}
            >
              {characterCount}/{maxCharacters}
            </p>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className='w-full bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center'
        >
          {isSubmitting ? (
            <>
              <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2'></div>
              Sending Message...
            </>
          ) : (
            <>
              <Send className='w-5 h-5 mr-2' />
              Send Message
            </>
          )}
        </button>
      </div>
    </div>
  );
}
