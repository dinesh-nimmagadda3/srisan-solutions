import { companyInfo } from '@/data/company';
import { aboutContent } from '@/data/aboutsection';

export const AboutSection = () => {
  return (
    <section id='about' className='py-20 bg-gray-50'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Content */}
          <div>
            <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
              {aboutContent.title}
            </h2>

            <div className='space-y-6 text-gray-700 leading-relaxed'>
              {aboutContent.paragraphs.map((paragraph, index) => (
                <p key={index} className='text-base'>
                  {index === 0 ? (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: paragraph
                          .replace(
                            /Srisan Solutions Limited/g,
                            '<strong>Srisan Solutions Limited</strong>'
                          )
                          .replace(/2011/g, '<strong>2011</strong>'),
                      }}
                    />
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>

            {/* Key Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-12'>
              <div className='text-center'>
                <div className='text-3xl font-bold text-orange-600 mb-2'>
                  {new Date().getFullYear() - companyInfo.founded}+
                </div>
                <div className='text-sm text-gray-600'>Years Experience</div>
              </div>

              <div className='text-center'>
                <div className='text-3xl font-bold text-orange-600 mb-2'>
                  20+
                </div>
                <div className='text-sm text-gray-600'>Years Expertise</div>
              </div>

              <div className='text-center'>
                <div className='text-3xl font-bold text-orange-600 mb-2'>
                  100%
                </div>
                <div className='text-sm text-gray-600'>SAP Focused</div>
              </div>

              <div className='text-center'>
                <div className='text-3xl font-bold text-orange-600 mb-2'>
                  Global
                </div>
                <div className='text-sm text-gray-600'>Client Base</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className='relative'>
            <img
              src={aboutContent.image.src}
              alt={aboutContent.image.alt}
              className='w-full h-auto rounded-2xl shadow-lg object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl'></div>
          </div>
        </div>
      </div>
    </section>
  );
};
