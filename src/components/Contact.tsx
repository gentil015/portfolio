import { useState } from 'react'
import type { FormEvent } from 'react'
import { contactLinks, site } from '../data/portfolio'

type Field = 'firstName' | 'lastName' | 'email' | 'subject' | 'message'
type Values = Record<Field, string>
type Errors = Partial<Record<Field, string>>

const initialValues: Values = {
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
}

function validate(values: Values): Errors {
  const errors: Errors = {}
  if (!values.firstName.trim()) errors.firstName = 'Please enter your first name.'
  if (!values.lastName.trim()) errors.lastName = 'Please enter your last name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email.'
  }
  if (!values.subject.trim()) errors.subject = 'Please enter a subject.'
  if (values.message.trim().length < 10) errors.message = 'Please write a message (at least 10 characters).'
  return errors
}

export function Contact() {
  const [values, setValues] = useState<Values>(initialValues)
  const [errors, setErrors] = useState<Errors>({})
  const [notice, setNotice] = useState('')

  const update = (field: Field, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const name = `${values.firstName.trim()} ${values.lastName.trim()}`
    const subject = `${values.subject.trim()} — ${name}`
    const body = `Hi Gentil,\n\n${values.message.trim()}\n\n— ${name}\n${values.email.trim()}`
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setNotice(
      `Your email app should open now. If it doesn't, send your message directly to ${site.email}.`,
    )
    window.location.href = mailto
    setValues(initialValues)
  }

  const field = (
    name: Field,
    label: string,
    id: string,
    placeholder: string,
    multiline = false,
  ) => (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      {multiline ? (
        <textarea
          id={id}
          name={name}
          value={values[name]}
          placeholder={placeholder}
          onChange={(event) => update(name, event.target.value)}
          aria-invalid={Boolean(errors[name])}
          aria-describedby={errors[name] ? `${id}-err` : undefined}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={name === 'email' ? 'email' : 'text'}
          value={values[name]}
          placeholder={placeholder}
          onChange={(event) => update(name, event.target.value)}
          aria-invalid={Boolean(errors[name])}
          aria-describedby={errors[name] ? `${id}-err` : undefined}
        />
      )}
      <span className={`form-error${errors[name] ? ' show' : ''}`} id={`${id}-err`} role="alert">
        {errors[name]}
      </span>
    </div>
  )

  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="section-inner">
        <div className="section-heading reveal">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title" id="contact-title">
            Let's build
            <br />
            something.
          </h2>
          <p className="section-sub">
            Whether you have a project, a question, or just want to connect — I'm always open to
            interesting conversations.
          </p>
        </div>
        <div className="contact-bento">
          <div className="contact-info bento-card reveal">
            <span className="card-index" aria-hidden="true">
              01
            </span>
            <p className="contact-card-label">Direct channels</p>
            <div className="contact-links">
              {contactLinks.map((link) => (
                <a
                  className="contact-link"
                  href={link.href}
                  key={link.label}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <span className="contact-link-icon" aria-hidden="true">
                    {link.icon}
                  </span>
                  <span className="contact-link-info">
                    <span className="contact-link-label">{link.label}</span>
                    <span className="contact-link-val">{link.value}</span>
                  </span>
                  <span className="contact-link-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div className="contact-form-card bento-card reveal">
            <span className="card-index" aria-hidden="true">
              02
            </span>
            <p className="contact-card-label">Send a message</p>
            <form id="contact-form" onSubmit={submit} noValidate>
              <div className="form-row">
                {field('firstName', 'First Name', 'fname', 'John')}
                {field('lastName', 'Last Name', 'lname', 'Doe')}
              </div>
              {field('email', 'Email Address', 'email', 'john@company.com')}
              {field('subject', 'Subject', 'subject', 'Project Inquiry')}
              {field('message', 'Message', 'message', 'Tell me about your project or idea...', true)}
              <button type="submit" className="btn-primary form-submit">
                Open Email <span aria-hidden="true">↗</span>
              </button>
              <p className={`form-notice${notice ? ' show' : ''}`} role="status" aria-live="polite">
                {notice}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
