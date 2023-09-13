import { fail } from '@sveltejs/kit';

export const actions = {
  login: async ({ request }) => {
    const data = await request.formData();
    const email = data.get('email');
    const password = data.get('password');

    console.log({ email, password });

    if (!email) {
      return fail(400, { email, missing: true });
    }

    if (password !== 'qwerty') {
      return fail(400, { email, incorrect: true });
    }

    return { success: true };
  }
};
