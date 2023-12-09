'use client';

import SubmitButton from '../SubmitButton/SubmitButton';
import { UserRegistrationSchema } from '@/app/schemas';
import toast from 'react-hot-toast';

const EventRegisterForm = () => {
  const handleSubmitForm = async (formData: FormData) => {
    const userData = Object.fromEntries(formData.entries());

    // performing client side validation
    const result = UserRegistrationSchema.safeParse(userData);

    if (!result.success) {
      let errorMessage = '+';
      result.error.issues.forEach((issue) => {
        errorMessage =
          errorMessage + issue.path[0] + ': ' + issue.message + '. ';
      });

      toast.error(errorMessage);
      return;
    }
  };

  return (
    <>
      <h3 className="underline italic mb-8">Event Registration Form</h3>
      <form action={handleSubmitForm} className="flex flex-col gap-4">
        <div>
          <label htmlFor="">Enter your name</label>
          <input
            type="text"
            placeholder="your name..."
            name="name"
            className="input-field"
            required
          />
        </div>
        <div>
          <label htmlFor="">Select your current course</label>
          <select
            name="course"
            id=""
            required
            defaultValue={'select your course'}
          >
            <option value="bba">BBA</option>
            <option value="bcom">BCOM</option>
            <option value="mtech">MTECH</option>
            <option value="mba">MBA</option>
            <option value="bca">BCA</option>
            <option value="mca">MCA</option>
            <option value="btech">BTECH</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Enter your University Roll Number</label>
          <input
            name="rollNo"
            type="number"
            placeholder="University Roll No..."
            className="input-field"
            required
          />
        </div>
        <div>
          <label htmlFor="">Enter your Whatsapp Phone Number</label>
          <input
            name="phoneNumber"
            type="number"
            placeholder="Mobile Number."
            minLength={10}
            maxLength={10}
            className="input-field"
            required
          />
        </div>
        <div>
          <label htmlFor="">Enter your college email address</label>
          <input
            name="email"
            type="email"
            placeholder="email address"
            className="input-field"
            required
          />
        </div>
        <div>
          <SubmitButton buttonCaption="Register" />
          <button className="primary-btn" type="reset">
            Reset
          </button>
        </div>
      </form>
    </>
  );
};

export default EventRegisterForm;
