import React from 'react';
import { ClinicHero } from '../components/HeroSection'
import { ClinicTeamSection } from '../components/TeamSection'
import { ClinicAppointmentBooking } from '../components/AppointmentBooking'
import { ClinicFooter } from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ClinicHero
        title="HealthCare Clinic"
        subtitle="Professional healthcare services for you and your family"
        ctaText="Book Appointment"
        ctaLink="#contact"
        className=""
      />
      <ClinicTeamSection
        members={[
        {
                "name": "Dr. Alice Johnson",
                "role": "Physician",
                "bio": "Expert in family medicine with 10+ years experience."
        },
        {
                "name": "Nurse Bob Wilson",
                "role": "Nurse",
                "bio": "Caring and attentive healthcare professional."
        },
        {
                "name": "Dr. Carol Davis",
                "role": "Specialist",
                "bio": "Board-certified specialist in internal medicine."
        }
]}
        className=""
      />
      <ClinicAppointmentBooking
        className=""
      />
      <ClinicFooter
        clinicName="HealthCare Clinic"
        address="123 Medical Center Dr, Healthcare City, HC 12345"
        links={[
        {
                "label": "Privacy Policy",
                "href": "/privacy"
        },
        {
                "label": "Terms of Service",
                "href": "/terms"
        },
        {
                "label": "Contact",
                "href": "/contact"
        }
]}
        social={[
        {
                "icon": "📧",
                "href": "mailto:contact@clinic.com",
                "label": "Email"
        },
        {
                "icon": "📞",
                "href": "tel:+1234567890",
                "label": "Phone"
        }
]}
        className=""
      />
    </main>
  );
}