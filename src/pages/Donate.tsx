import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CheckCircle, DollarSign, Heart, User, Users, Building, CalendarClock } from 'lucide-react';
import { motion } from 'framer-motion';

type DonationType = 'temple-construction' | 'family-blessings' | 'memorial';
type DonationFrequency = 'one-time' | 'monthly' | 'annually';

interface DonationFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country: string;
  amount: number;
  customAmount?: number;
  donationType: DonationType;
  donationFrequency: DonationFrequency;
  isAnonymous: boolean;
  prayerMessage?: string;
  panCard?: string;
}

const Donate: React.FC = () => {
  const [selectedType, setSelectedType] = useState<DonationType>('temple-construction');
  const [selectedFrequency, setSelectedFrequency] = useState<DonationFrequency>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number>(1000);
  const [isCustomAmount, setIsCustomAmount] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<DonationFormInputs>({
    defaultValues: {
      donationType: 'temple-construction',
      donationFrequency: 'one-time',
      amount: 1000,
      isAnonymous: false,
      country: 'India'
    }
  });

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const handleTypeChange = (type: DonationType) => {
    setSelectedType(type);
    setValue('donationType', type);
  };

  const handleFrequencyChange = (frequency: DonationFrequency) => {
    setSelectedFrequency(frequency);
    setValue('donationFrequency', frequency);
  };

  const handleAmountChange = (amount: number) => {
    setSelectedAmount(amount);
    setValue('amount', amount);
    setIsCustomAmount(false);
  };

  const handleCustomAmountToggle = () => {
    setIsCustomAmount(true);
    setValue('amount', 0);
  };

  const handleAnonymousToggle = () => {
    setIsAnonymous(!isAnonymous);
    setValue('isAnonymous', !isAnonymous);
  };

  const onSubmit: SubmitHandler<DonationFormInputs> = (data) => {
    console.log(data);
    // In a real implementation, you would process the payment here
    // and handle the API call to your payment processor
    setIsSubmitted(true);
  };

  const donationTypes = [
    {
      id: 'temple-construction',
      title: 'Temple Construction',
      icon: <Building className="h-8 w-8 text-saffron-600" />,
      description: 'Support the building of our sacred temple structure and facilities.'
    },
    {
      id: 'family-blessings',
      title: 'Family Blessings',
      icon: <Users className="h-8 w-8 text-saffron-600" />,
      description: 'Donate for the wellbeing and prosperity of your family.'
    },
    {
      id: 'memorial',
      title: 'In Memory / Spiritual Intent',
      icon: <Heart className="h-8 w-8 text-saffron-600" />,
      description: 'Make a donation in memory of a loved one or for a specific spiritual intent.'
    }
  ];

  const donationFrequencies = [
    {
      id: 'one-time',
      title: 'One-time',
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      id: 'monthly',
      title: 'Monthly',
      icon: <CalendarClock className="h-6 w-6" />
    },
    {
      id: 'annually',
      title: 'Annually',
      icon: <CalendarClock className="h-6 w-6" />
    }
  ];

  const suggestedAmounts = [500, 1000, 5000, 11000, 21000];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-800/90 to-maroon-900/90 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/6147132/pexels-photo-6147132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          }} 
        />
        <div className="container-custom relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Support Our Divine Mission
            </h1>
            <p className="text-xl text-gray-200 mb-6">
              Your contribution helps us build a sacred space for worship, community, and spiritual enlightenment.
              Every donation brings us one step closer to completing our temple.
            </p>
            <div className="w-20 h-1 bg-gold-500 rounded-full mb-8"></div>
          </motion.div>
        </div>
      </section>

      {isSubmitted ? (
        // Thank You Section
        <section className="py-16 bg-white">
          <div className="container-custom">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              variants={fadeIn}
              initial="initial"
              animate="animate"
            >
              <div className="mb-8 flex justify-center">
                <CheckCircle className="h-20 w-20 text-green-500" />
              </div>
              <h2 className="text-3xl font-bold text-maroon-600 mb-6">
                Thank You for Your Generous Donation!
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Your contribution of ₹{selectedAmount} will help us build our temple and serve the community.
                A confirmation email has been sent to your registered email address with the donation details.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                May Lord Venkateswara bless you and your family with health, happiness, and prosperity.
              </p>
              <div className="card p-8 bg-saffron-50 mb-8">
                <h3 className="text-xl font-semibold text-maroon-600 mb-4">
                  Your Donation Details:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div>
                    <p className="text-gray-600">Donation Type:</p>
                    <p className="font-medium text-gray-800">
                      {selectedType === 'temple-construction' ? 'Temple Construction' : 
                       selectedType === 'family-blessings' ? 'Family Blessings' : 'In Memory / Spiritual Intent'}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Donation Amount:</p>
                    <p className="font-medium text-gray-800">₹{selectedAmount}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Donation Frequency:</p>
                    <p className="font-medium text-gray-800">
                      {selectedFrequency === 'one-time' ? 'One-time' : 
                       selectedFrequency === 'monthly' ? 'Monthly' : 'Annual'}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Transaction ID:</p>
                    <p className="font-medium text-gray-800">SVT{Math.floor(Math.random() * 1000000)}</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn btn-outline"
              >
                Make Another Donation
              </button>
            </motion.div>
          </div>
        </section>
      ) : (
        // Donation Form Section
        <section className="py-16 bg-white">
          <div className="container-custom">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-12"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="section-title">Make a Donation</h2>
              <p className="text-lg text-gray-700 mt-8">
                Your contribution, no matter how small, helps us build this sacred temple for generations to come.
                All donations are tax-deductible under Section 80G.
              </p>
            </motion.div>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Donation Type Selection */}
              <motion.div
                className="mb-12"
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-maroon-600 mb-6 text-center">
                  Select Donation Purpose
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {donationTypes.map((type) => (
                    <div
                      key={type.id}
                      className={`card p-6 cursor-pointer transition-all duration-300 ${
                        selectedType === type.id 
                          ? 'border-2 border-saffron-500 shadow-md' 
                          : 'hover:shadow-md'
                      }`}
                      onClick={() => handleTypeChange(type.id as DonationType)}
                    >
                      <div className="flex justify-center mb-4">
                        {type.icon}
                      </div>
                      <h4 className="text-lg font-medium text-maroon-600 mb-2 text-center">
                        {type.title}
                      </h4>
                      <p className="text-gray-600 text-center text-sm">
                        {type.description}
                      </p>
                      <input
                        type="radio"
                        className="hidden"
                        value={type.id}
                        {...register('donationType')}
                        checked={selectedType === type.id}
                        readOnly
                      />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Donation Frequency */}
              <motion.div
                className="mb-12"
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-maroon-600 mb-6 text-center">
                  Donation Frequency
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {donationFrequencies.map((frequency) => (
                    <div
                      key={frequency.id}
                      className={`px-6 py-3 rounded-full cursor-pointer flex items-center gap-2 transition-all duration-300 ${
                        selectedFrequency === frequency.id
                          ? 'bg-saffron-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => handleFrequencyChange(frequency.id as DonationFrequency)}
                    >
                      {frequency.icon}
                      <span>{frequency.title}</span>
                      <input
                        type="radio"
                        className="hidden"
                        value={frequency.id}
                        {...register('donationFrequency')}
                        checked={selectedFrequency === frequency.id}
                        readOnly
                      />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Donation Amount */}
              <motion.div
                className="mb-12"
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-maroon-600 mb-6 text-center">
                  Select Donation Amount
                </h3>
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  {suggestedAmounts.map((amount) => (
                    <div
                      key={amount}
                      className={`px-6 py-3 rounded-full cursor-pointer transition-all duration-300 ${
                        selectedAmount === amount && !isCustomAmount
                          ? 'bg-saffron-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => handleAmountChange(amount)}
                    >
                      ₹{amount.toLocaleString()}
                      <input
                        type="radio"
                        className="hidden"
                        {...register('amount')}
                        value={amount}
                        checked={selectedAmount === amount && !isCustomAmount}
                        readOnly
                      />
                    </div>
                  ))}
                  <div
                    className={`px-6 py-3 rounded-full cursor-pointer transition-all duration-300 ${
                      isCustomAmount
                        ? 'bg-saffron-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={handleCustomAmountToggle}
                  >
                    Custom Amount
                  </div>
                </div>
                {isCustomAmount && (
                  <div className="max-w-md mx-auto">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <span className="text-gray-500">₹</span>
                      </div>
                      <input
                        type="number"
                        className="input-field pl-8"
                        placeholder="Enter custom amount"
                        {...register('customAmount', {
                          required: isCustomAmount ? 'Please enter a custom amount' : false,
                          min: {
                            value: 100,
                            message: 'Minimum donation amount is ₹100'
                          }
                        })}
                        onChange={(e) => {
                          const value = parseInt(e.target.value);
                          setSelectedAmount(value);
                          setValue('amount', value);
                        }}
                      />
                    </div>
                    {errors.customAmount && (
                      <p className="text-red-500 text-sm mt-1">{errors.customAmount.message}</p>
                    )}
                  </div>
                )}
              </motion.div>

              {/* Anonymous Donation & Prayer Message */}
              <motion.div
                className="mb-12"
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <div className="max-w-3xl mx-auto">
                  <div className="flex items-center justify-center mb-6">
                    <label className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={isAnonymous}
                          onChange={handleAnonymousToggle}
                          {...register('isAnonymous')}
                        />
                        <div className={`w-10 h-6 bg-gray-200 rounded-full shadow-inner ${isAnonymous ? 'bg-saffron-600' : ''}`}></div>
                        <div className={`absolute inset-y-0 left-0 w-6 h-6 bg-white rounded-full shadow transform ${isAnonymous ? 'translate-x-full' : 'translate-x-0'} transition-transform duration-300`}></div>
                      </div>
                      <span className="ml-3 text-gray-700">Make this donation anonymous</span>
                    </label>
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2" htmlFor="prayerMessage">
                      Prayer Message / Donation Intent (Optional)
                    </label>
                    <textarea
                      className="input-field h-32"
                      placeholder="Enter your prayer or the intent behind your donation..."
                      {...register('prayerMessage')}
                    ></textarea>
                  </div>
                </div>
              </motion.div>

              {/* Personal Information */}
              <motion.div
                className="mb-12"
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-maroon-600 mb-6 text-center">
                  Your Information
                </h3>
                <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="firstName">
                      First Name*
                    </label>
                    <input
                      type="text"
                      className={`input-field ${errors.firstName ? 'border-red-500' : ''}`}
                      {...register('firstName', { required: 'First name is required' })}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="lastName">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      className={`input-field ${errors.lastName ? 'border-red-500' : ''}`}
                      {...register('lastName', { required: 'Last name is required' })}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="phone">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      className="input-field"
                      {...register('phone')}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-2" htmlFor="address">
                      Address (Optional)
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      {...register('address')}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="city">
                      City (Optional)
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      {...register('city')}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="state">
                      State/Province (Optional)
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      {...register('state')}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="zipCode">
                      Postal/ZIP Code (Optional)
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      {...register('zipCode')}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="country">
                      Country*
                    </label>
                    <select
                      className={`input-field ${errors.country ? 'border-red-500' : ''}`}
                      {...register('country', { required: 'Country is required' })}
                    >
                      <option value="India">India</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.country && (
                      <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
                    )}
                  </div>
                  {watch('country') === 'India' && (
                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="panCard">
                        PAN Card (For tax benefits, Optional)
                      </label>
                      <input
                        type="text"
                        className="input-field"
                        placeholder="e.g. ABCDE1234F"
                        {...register('panCard')}
                      />
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                className="text-center"
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <button
                  type="submit"
                  className="btn bg-saffron-600 hover:bg-saffron-700 text-white text-lg px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Complete Donation
                </button>
                <p className="mt-4 text-sm text-gray-600">
                  By clicking 'Complete Donation', you agree to our Terms of Service and Privacy Policy.
                  All donations are processed securely.
                </p>
              </motion.div>
            </form>
          </div>
        </section>
      )}

      {/* Tax Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="section-title">Tax Benefits</h2>
            <p className="text-lg text-gray-700 mt-8">
              All donations to Sri Venkateswara Temple are eligible for tax deductions under Section 80G
              of the Income Tax Act. You will receive an official receipt for your contribution.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              className="card p-6"
              variants={fadeIn}
            >
              <h3 className="text-xl font-semibold text-maroon-600 mb-4">For Indian Donors</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-saffron-600 mr-2">●</span>
                  Donations are eligible for 50% tax deduction under Section 80G of the Income Tax Act
                </li>
                <li className="flex items-start">
                  <span className="text-saffron-600 mr-2">●</span>
                  Provide your PAN details while donating to automatically receive the tax benefit
                </li>
                <li className="flex items-start">
                  <span className="text-saffron-600 mr-2">●</span>
                  Official 80G receipt will be emailed to you after your donation
                </li>
                <li className="flex items-start">
                  <span className="text-saffron-600 mr-2">●</span>
                  The receipt can be used while filing your income tax returns
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="card p-6"
              variants={fadeIn}
            >
              <h3 className="text-xl font-semibold text-maroon-600 mb-4">For International Donors</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-saffron-600 mr-2">●</span>
                  Donations may be eligible for tax benefits in your country of residence
                </li>
                <li className="flex items-start">
                  <span className="text-saffron-600 mr-2">●</span>
                  We provide official donation receipts that can be used for tax purposes
                </li>
                <li className="flex items-start">
                  <span className="text-saffron-600 mr-2">●</span>
                  Please consult with your tax advisor regarding specific tax benefits in your country
                </li>
                <li className="flex items-start">
                  <span className="text-saffron-600 mr-2">●</span>
                  For US donors: We can provide additional documentation upon request
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                question: "How are the donations utilized?",
                answer: "All donations are primarily used for temple construction, including materials, labor, and religious artifacts. Funds are also allocated for maintenance, community programs, and charitable activities as per the temple trust's guidelines."
              },
              {
                question: "Can I donate for a specific purpose?",
                answer: "Yes, you can select your preferred donation purpose: Temple Construction, Family Blessings, or In Memory/Spiritual Intent. You can also specify your intention in the prayer message field during donation."
              },
              {
                question: "Is my donation secure?",
                answer: "Yes, all donations are processed through secure payment gateways with encryption. We do not store your payment information on our servers."
              },
              {
                question: "How do I get a receipt for my donation?",
                answer: "An electronic receipt is automatically sent to your email address after your donation is processed. If you need a physical receipt, please contact us with your donation details."
              },
              {
                question: "Can I make a donation in someone else's name?",
                answer: "Yes, you can make a donation in honor or in memory of someone. Simply select the 'In Memory/Spiritual Intent' option and provide details in the prayer message field."
              },
              {
                question: "How can I check the progress of the temple construction?",
                answer: "You can visit our Gallery section to see the latest construction updates and progress. We also send regular updates to our donors via email."
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="mb-6 border-b border-gray-200 pb-6 last:border-b-0 last:pb-0"
                variants={fadeIn}
              >
                <h3 className="text-lg font-semibold text-maroon-600 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-700">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact For Large Donations */}
      <section className="py-16 bg-saffron-50">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-maroon-600 mb-6">
              For Large Donations or Corporate Sponsorships
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              If you're interested in making a substantial donation or exploring corporate sponsorship
              opportunities, please contact our donation team directly for personalized assistance.
            </p>
            <div className="inline-flex items-center justify-center gap-4">
              <a
                href="mailto:donations@srivenkateswara.org"
                className="btn btn-primary"
              >
                Email Donation Team
              </a>
              <a
                href="tel:+919876543210"
                className="btn btn-outline"
              >
                Call: +91 98765 43210
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Donate;