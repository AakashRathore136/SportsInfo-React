const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[\d\s\-+()]+$/;
const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

class User {
  constructor(firstName, lastName, email) {
    this.firstName = firstName.trim();
    this.lastName = lastName.trim();
    this.email = email.trim();
  }

  getDisplayName() {
    return `${this.firstName} ${this.lastName}`.trim();
  }

  validateBasicInfo() {
    if (this.firstName.length < 2) return 'First name must be at least 2 characters long';
    if (this.lastName.length < 2) return 'Last name must be at least 2 characters long';
    if (!emailPattern.test(this.email)) return 'Please enter a valid email address';
    return null;
  }

  getWelcomeMessage() {
    return `Welcome, ${this.getDisplayName()}!`;
  }
}

class SportsLearner extends User {
  constructor({ firstName, lastName, email, phone, password, experience, terms }) {
    super(firstName, lastName, email);
    this.phone = phone.trim();
    this.password = password;
    this.experience = experience;
    this.terms = terms;
  }

  validateProfile() {
    const basicInfoError = this.validateBasicInfo();
    if (basicInfoError) return basicInfoError;

    if (this.phone) {
      const digits = this.phone.replace(/\D/g, '');
      if (!phonePattern.test(this.phone) || digits.length < 10) {
        return 'Please enter a valid phone number (at least 10 digits)';
      }
    }

    if (!strongPasswordPattern.test(this.password)) {
      return (
        'Password must contain:\n- At least 8 characters\n- One uppercase letter (A-Z)\n- One lowercase letter (a-z)\n- One number (0-9)\n- One special character (@$!%*?&)'
      );
    }

    if (!this.experience) return 'Please select your experience level';
    if (!this.terms) return 'Please agree to the Terms of Service and Privacy Policy';

    return null;
  }

  getWelcomeMessage() {
    return `Welcome to SportsInfo, ${this.getDisplayName()}!`;
  }
}

class RegistrationService {
  constructor(learner, profilePic) {
    this.learner = learner;
    this.profilePic = profilePic;
  }

  validateProfilePicture() {
    if (!this.profilePic) return null;

    const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
    const maxSize = 5 * 1024 * 1024;

    if (!validTypes.includes(this.profilePic.type)) {
      return 'Please upload a valid image file (JPG, PNG, or GIF)';
    }
    if (this.profilePic.size > maxSize) return 'Profile picture must be less than 5MB';

    return null;
  }

  validateAll() {
    const profileError = this.learner.validateProfile();
    if (profileError) return profileError;

    return this.validateProfilePicture();
  }
}

export { RegistrationService, SportsLearner, User };