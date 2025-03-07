import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  tarifvertrag?: string;
}

export function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    tarifvertrag: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name ist erforderlich';
    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail ist erforderlich';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ungültige E-Mail-Adresse';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Betreff ist erforderlich';
    if (!formData.message.trim()) newErrors.message = 'Nachricht ist erforderlich';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        const subjectMap: Record<string, string> = {
          'missing': 'Fehlender Tarifvertrag',
          'correction': 'Korrektur melden',
          'question': 'Allgemeine Anfrage',
          'other': 'Sonstiges'
        };

        const emailSubject = encodeURIComponent(`[tarif-vertrag.org] ${subjectMap[formData.subject] || formData.subject}`);
        const emailBody = encodeURIComponent(
          `Name: ${formData.name}\n` +
          `E-Mail: ${formData.email}\n` +
          (formData.tarifvertrag ? `Tarifvertrag: ${formData.tarifvertrag}\n\n` : '\n') +
          `${formData.message}`
        );

        const mailtoHref = `mailto:tarif-vertrag@mailbox.org?subject=${emailSubject}&body=${emailBody}`;
        window.location.href = mailtoHref;
        setIsSubmitted(true);
      } catch (error) {
        console.error('Error creating mailto link:', error);
        alert('Es gab ein Problem beim Öffnen des E-Mail-Programms. Bitte versuchen Sie es später erneut.');
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Vielen Dank für Ihre Nachricht!
        </h2>
        <p className="text-gray-600 mb-8">
          Ihre E-Mail-Anwendung wurde geöffnet. Bitte senden Sie die vorbereitete E-Mail ab.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              email: '',
              subject: '',
              message: '',
              tarifvertrag: ''
            });
          }}
          className="text-blue-600 hover:text-blue-800"
        >
          Neue Nachricht verfassen
        </button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Kontakt - Deutsche Tarifverträge Database</title>
        <meta name="description" content="Kontaktieren Sie uns bei Fragen, Anregungen oder wenn Sie einen fehlenden Tarifvertrag melden möchten." />
      </Helmet>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Send className="h-12 w-12 mx-auto text-blue-600 mb-4" />
          <h1 className="text-3xl font-bold text-gray-900">Kontaktieren Sie uns</h1>
          <p className="mt-4 text-lg text-gray-600">
            Haben Sie Fragen oder Anregungen? Wir freuen uns über Ihre Nachricht.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md shadow-sm ${
                  errors.name ? 'border-red-300' : 'border-gray-300'
                } focus:border-blue-500 focus:ring-blue-500`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md shadow-sm ${
                  errors.email ? 'border-red-300' : 'border-gray-300'
                } focus:border-blue-500 focus:ring-blue-500`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Betreff
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md shadow-sm ${
                  errors.subject ? 'border-red-300' : 'border-gray-300'
                } focus:border-blue-500 focus:ring-blue-500`}
              >
                <option value="">Bitte wählen</option>
                <option value="missing">Fehlender Tarifvertrag</option>
                <option value="correction">Korrektur melden</option>
                <option value="question">Allgemeine Anfrage</option>
                <option value="other">Sonstiges</option>
              </select>
              {errors.subject && (
                <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
              )}
            </div>

            {formData.subject === 'missing' && (
              <div>
                <label htmlFor="tarifvertrag" className="block text-sm font-medium text-gray-700">
                  Name des Tarifvertrags
                </label>
                <input
                  type="text"
                  id="tarifvertrag"
                  name="tarifvertrag"
                  value={formData.tarifvertrag}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="z.B. TVöD-VKA"
                />
              </div>
            )}

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Ihre Nachricht
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md shadow-sm ${
                  errors.message ? 'border-red-300' : 'border-gray-300'
                } focus:border-blue-500 focus:ring-blue-500`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Send className="h-5 w-5 mr-2" />
                Nachricht senden
              </button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}