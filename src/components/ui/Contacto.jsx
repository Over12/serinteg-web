import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from 'emailjs-com';
import { EMAILJS } from '../../constants/dataEmail.js';
import { schemaContactForm } from '../../schemas/schemaContactForm.js';
import { NotificationPop } from '../common/NotificationPop.jsx';
import { useNotification } from '../../utils/hooks/useNotification.js';
import '../../styles/components/ui/Contacto.css';

export function Contacto({ handleOpenModal }) {
  const [notification, setNotification] = useNotification();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schemaContactForm),
  });

  const onSubmit = (data) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    emailjs.send(EMAILJS.SERVICE_ID, EMAILJS.TEMPLATE_ID, data, EMAILJS.PUBLIC_KEY)
      .then(() => {
        setNotification({
          isOpen: true,
          message: 'Correo enviado correctamente',
          status: 'success',
        });
        setIsSubmitting(false);
      }, (err) => {
        setNotification({
          isOpen: true,
          message: 'Ocurrió un error al enviar el correo',
          status: 'error',
        });
        setIsSubmitting(false);
      });
  };

  const { isOpen, message, status } = notification;

  return (
    <>
      <section className='modal-contact'>
        <button className='button-close-modal-contact' onClick={handleOpenModal}>&times;</button>
        <div className='content-modal-contact'>
          <h1>CONTÁCTANOS</h1>
          <form className='form-contact' onSubmit={handleSubmit(onSubmit)}>
            <div className='input-group'>
              <label htmlFor='name'>Empresa/Nombre completo</label>
              <input type='text' id='name' {...register('name')} />
              {errors.name && <span className='error-modal-contact'>{errors.name.message}</span>}
            </div>
            <div className='input-group'>
              <label htmlFor='email'>Correo electrónico</label>
              <input type='email' id='email' {...register('email')} />
              {errors.email && <span className='error-modal-contact'>{errors.email.message}</span>}
            </div>
            <div className='input-group'>
              <label htmlFor='message'>Mensaje</label>
              <textarea id='message' {...register('message')} />
              {errors.message && <span className='error-modal-contact'>{errors.message.message}</span>}
            </div>
            <button type='submit' className='button-send' disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'ENVIAR'}
            </button>
          </form>
        </div>
      </section>
      {isOpen && <NotificationPop message={message} status={status} />}
    </>
  );
}