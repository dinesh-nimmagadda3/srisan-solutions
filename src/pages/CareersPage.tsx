import {
  ArrowLeft,
  Mail,
  MapPin,
  Users,
  CheckCircle,
  Briefcase,
  Calendar,
  DollarSign,
  ArrowRight,
} from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { careersPageContent, iconMap } from '@/data/careerspage';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  posted: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
}

interface CareersData {
  company: {
    name: string;
    tagline: string;
    description: string;
    culture: string[];
  };
  contact: {
    email: string;
    subject: string;
    instructions: string;
  };
  benefits: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  openPositions: JobPosition[];
}

export const CareersPage = () => {
  const [careersData, setCareersData] = useState<CareersData | null>(null);
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleBackHome = () => {
    window.location.href = '/';
  };

  const handleApplyNow = (job: JobPosition) => {
    if (!careersData) return;

    const subject = careersData.contact.subject.replace(
      '[Position Title]',
      job.title
    );
    const body = `Dear SSL Solutions Team,
  
  I am interested in applying for the ${job.title} position (${job.id}).
  
  Please find my CV attached.
  
  Best regards,
  [Your Name]`;

    const mailtoLink = `mailto:${careersData.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleGeneralApplication = () => {
    if (!careersData) return;

    const subject = 'General Application - SSL Solutions';
    const body = `Dear SSL Solutions Team,
  
  I am interested in opportunities at SSL Solutions Limited.
  
  Please find my CV attached.
  
  Best regards,
  [Your Name]`;

    const mailtoLink = `mailto:${careersData.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  // Load careers data from JSON file
  useEffect(() => {
    const loadCareersData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/careers.json');

        if (!response.ok) {
          throw new Error('Failed to load careers data');
        }

        const data: CareersData = await response.json();
        setCareersData(data);

        // Set first job as selected by default
        if (data.openPositions.length > 0) {
          setSelectedJob(data.openPositions[0]);
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to load careers data'
        );
        console.error('Error loading careers data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadCareersData();
  }, []);

  // Format date for display
  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  // Memoize benefits with icons
  const benefitsWithIcons = useMemo(() => {
    if (!careersData) return [];

    return careersData.benefits.map(benefit => ({
      ...benefit,
      IconComponent: iconMap[benefit.icon as keyof typeof iconMap] || Users,
    }));
  }, [careersData]);

  if (loading) {
    return (
      <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4'></div>
          <p className='text-gray-600'>{careersPageContent.loading.message}</p>
        </div>
      </div>
    );
  }

  if (error || !careersData) {
    return (
      <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
        <div className='text-center max-w-md mx-auto px-4'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            {careersPageContent.error.fallbackTitle}
          </h1>
          <p className='text-gray-600 mb-8'>
            {error || careersPageContent.error.fallbackMessage}
          </p>
          <button
            onClick={handleBackHome}
            className='bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors'
          >
            {careersPageContent.error.buttonText}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <header className='bg-white shadow-sm'>
        <div className='max-w-6xl mx-auto px-6 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
              <img
                src='/ssl-logo.png'
                alt='SSL Solutions Logo'
                className='h-12 w-auto'
                onError={e => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div>
                <h1 className='text-xl font-bold text-gray-900'>
                  SSL Solutions Limited
                </h1>
                <p className='text-orange-600 text-sm font-medium'>
                  BOUTIQUE SAP CONSULTING
                </p>
              </div>
            </div>

            <button
              onClick={handleBackHome}
              className='flex items-center text-gray-600 hover:text-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-lg px-3 py-2'
            >
              <ArrowLeft className='w-5 h-5 mr-2' />
              Back to Home
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className='py-20 relative bg-gray-900 text-white overflow-hidden'>
        {/* Background Image */}
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: `url('/images/hero-careers.jpg')`,
          }}
        ></div>

        {/* Dark overlay for text readability */}
        <div className='absolute inset-0 bg-gradient-to-r from-gray-900/80 to-blue-900/70'></div>

        {/* Content */}
        <div className='max-w-6xl mx-auto px-6 text-center relative z-10'>
          <h2 className='text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg'>
            {careersPageContent.hero.title}
          </h2>
          <p className='text-2xl text-blue-100 mb-8 drop-shadow-md'>
            {careersData.company.tagline}
          </p>
          <p className='text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed drop-shadow-md'>
            {careersData.company.description}
          </p>
        </div>
      </section>

      {/* Company Culture */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <div>
              <h3 className='text-4xl font-bold text-gray-900 mb-8'>
                {careersPageContent.culture.title}
              </h3>
              <div className='space-y-4'>
                {careersData.company.culture.map((item, index) => (
                  <div key={index} className='flex items-start space-x-3'>
                    <CheckCircle className='w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5' />
                    <p className='text-lg text-gray-700'>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className='relative'>
              <img
                src='/images/careers-culture.jpg'
                alt='Team collaboration and culture'
                className='w-full h-auto rounded-2xl shadow-lg object-cover'
                onError={e => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget
                    .nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className='w-full h-96 rounded-2xl shadow-lg bg-gradient-to-br from-orange-100 to-gray-200 hidden items-center justify-center'>
                <div className='text-center text-gray-500'>
                  <Users className='w-16 h-16 mx-auto mb-4' />
                  <p className='text-sm'>Join Our Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h3 className='text-4xl font-bold text-gray-900 mb-6'>
              {careersPageContent.benefits.title}
            </h3>
            <p className='text-xl text-gray-600'>
              {careersPageContent.benefits.subtitle}
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {benefitsWithIcons.map((benefit, index) => (
              <div
                key={index}
                className='text-center bg-gray-50 rounded-xl p-8'
              >
                <div className='w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <benefit.IconComponent className='w-8 h-8 text-orange-600' />
                </div>
                <h4 className='text-xl font-bold text-gray-900 mb-4'>
                  {benefit.title}
                </h4>
                <p className='text-gray-600 leading-relaxed'>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h3 className='text-4xl font-bold text-gray-900 mb-6'>
              {careersPageContent.positions.title}
            </h3>
            <p className='text-xl text-gray-600'>
              {careersPageContent.positions.subtitle}
            </p>
          </div>

          {careersData.openPositions.length > 0 ? (
            <div className='grid lg:grid-cols-2 gap-12'>
              {/* Job List */}
              <div className='space-y-4'>
                {careersData.openPositions.map(job => (
                  <button
                    key={job.id}
                    onClick={() => setSelectedJob(job)}
                    className={`w-full text-left p-6 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
                      selectedJob?.id === job.id
                        ? 'bg-orange-600 text-white shadow-lg scale-105'
                        : 'bg-white hover:bg-orange-50 shadow-md hover:shadow-lg border border-gray-100'
                    }`}
                  >
                    <div className='flex items-start justify-between mb-4'>
                      <div>
                        <h4
                          className={`text-xl font-bold mb-2 ${
                            selectedJob?.id === job.id
                              ? 'text-white'
                              : 'text-gray-900'
                          }`}
                        >
                          {job.title}
                        </h4>
                        <p
                          className={`text-sm font-medium ${
                            selectedJob?.id === job.id
                              ? 'text-orange-100'
                              : 'text-orange-600'
                          }`}
                        >
                          {job.department}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          selectedJob?.id === job.id
                            ? 'bg-white/20 text-white'
                            : 'bg-orange-100 text-orange-800'
                        }`}
                      >
                        {job.type}
                      </span>
                    </div>

                    <div
                      className={`grid grid-cols-2 gap-4 text-sm ${
                        selectedJob?.id === job.id
                          ? 'text-orange-100'
                          : 'text-gray-600'
                      }`}
                    >
                      <div className='flex items-center'>
                        <MapPin className='w-4 h-4 mr-2' />
                        {job.location}
                      </div>
                      <div className='flex items-center'>
                        <Briefcase className='w-4 h-4 mr-2' />
                        {job.experience}
                      </div>
                      <div className='flex items-center'>
                        <DollarSign className='w-4 h-4 mr-2' />
                        {job.salary}
                      </div>
                      <div className='flex items-center'>
                        <Calendar className='w-4 h-4 mr-2' />
                        {formatDate(job.posted)}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Job Details */}
              {selectedJob && (
                <div className='lg:sticky lg:top-24'>
                  <div className='bg-white rounded-2xl p-8 shadow-xl border border-gray-100'>
                    <div className='mb-6'>
                      <h4 className='text-2xl font-bold text-gray-900 mb-2'>
                        {selectedJob.title}
                      </h4>
                      <p className='text-orange-600 font-medium mb-4'>
                        {selectedJob.department} • {selectedJob.location}
                      </p>
                      <p className='text-gray-700 leading-relaxed'>
                        {selectedJob.summary}
                      </p>
                    </div>

                    <div className='space-y-6'>
                      <div>
                        <h5 className='font-bold text-gray-900 mb-3'>
                          Key Responsibilities
                        </h5>
                        <ul className='space-y-2'>
                          {selectedJob.responsibilities.map(
                            (responsibility, index) => (
                              <li
                                key={index}
                                className='text-gray-600 text-sm flex items-start'
                              >
                                <CheckCircle className='w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0' />
                                {responsibility}
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      <div>
                        <h5 className='font-bold text-gray-900 mb-3'>
                          Requirements
                        </h5>
                        <ul className='space-y-2'>
                          {selectedJob.requirements.map(
                            (requirement, index) => (
                              <li
                                key={index}
                                className='text-gray-600 text-sm flex items-start'
                              >
                                <CheckCircle className='w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0' />
                                {requirement}
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      <div>
                        <h5 className='font-bold text-gray-900 mb-3'>
                          Key Skills
                        </h5>
                        <div className='flex flex-wrap gap-2'>
                          {selectedJob.skills.map((skill, index) => (
                            <span
                              key={index}
                              className='bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium'
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className='mt-8 pt-6 border-t border-gray-200'>
                      <button
                        onClick={() => handleApplyNow(selectedJob)}
                        className='w-full bg-orange-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
                      >
                        <Mail className='w-5 h-5 mr-2' />
                        {careersPageContent.application.applyButtonText}
                      </button>

                      <div className='mt-4 p-4 bg-gray-50 rounded-lg'>
                        <p className='text-sm text-gray-600 text-center'>
                          {careersData.contact.instructions}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className='text-center py-12'>
              <Users className='w-16 h-16 text-gray-400 mx-auto mb-4' />
              <h4 className='text-2xl font-bold text-gray-900 mb-4'>
                {careersPageContent.positions.noPositions.title}
              </h4>
              <p className='text-gray-600 mb-8'>
                {careersPageContent.positions.noPositions.description}
              </p>
              <button
                onClick={handleGeneralApplication}
                className='bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
              >
                {careersPageContent.positions.noPositions.buttonText}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <h3 className='text-4xl lg:text-5xl font-bold mb-6 text-gray-900'>
            {careersPageContent.cta.title}
          </h3>
          <p className='text-xl mb-12 leading-relaxed text-gray-600'>
            {careersPageContent.cta.description}
          </p>

          <button
            onClick={handleGeneralApplication}
            className='bg-orange-600 text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-orange-700 transform hover:scale-105 transition-all duration-200 shadow-xl flex items-center justify-center mx-auto'
          >
            <Mail className='w-5 h-5 mr-2' />
            {careersPageContent.cta.primaryButton}
            <ArrowRight className='w-5 h-5 ml-2' />
          </button>

          <div className='mt-8 p-6 bg-white rounded-lg shadow-md'>
            <p className='text-gray-700'>
              {careersPageContent.application.contactInstructions}{' '}
              <strong>{careersData.contact.email}</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
