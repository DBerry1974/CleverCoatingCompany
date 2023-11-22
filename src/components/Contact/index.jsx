import { Button } from "../Buttons";
import Input from "../Form/Input.astro";

export const ContactForm = () => {
  return (
    <form
      action={import.meta.env.PUBLIC_CONTACT_FORM}
      method="POST"
      className="grid grid-cols-1 gap-y-6"
    >
      <div>
        <Input
          autocomplete="name"
          id="full-name"
          label="Full name"
          name="full-name"
          placeholder="Full name"
        />
      </div>
      <div>
        <Input
          autocomplete="email"
          id="email"
          label="Email"
          name="email"
          placeholder="Email"
          type="email"
        />
      </div>
      <div>
        <Input
          autocomplete="tel"
          id="phone"
          label="Phone"
          name="phone"
          placeholder="Phone"
          type="tel"
        />
      </div>
      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-300 focus:ring-orange-300"
          placeholder="Message"
        ></textarea>
      </div>
      <div>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};
