import { useState } from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';

interface CreditCardForm {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
}

function CreditCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<CreditCardForm>();

  const onSubmit = (data: CreditCardForm) => {
    console.log(data);
    // Here you would typically send the data to your payment processor
    alert('Card details submitted successfully!');
  };

  const formatCardNumber = (value: string) => {
    return value
      .replace(/\s/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim();
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-blue-500 to-purple-600 p-4 min-h-screen">
      <div className="w-full max-w-md">
        <div 
          className={classNames(
            "relative h-56 w-full transition-transform duration-700 transform-gpu",
            { "rotate-y-180": isFlipped }
          )}
        >
          {/* Front of card */}
          <div className="absolute bg-gradient-to-br from-gray-900 to-gray-700 shadow-xl p-6 rounded-xl w-full h-full text-white">
            <div className="flex justify-between items-start">
              <div className="space-y-4">
                <div className="w-16 h-12">
                  <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png" alt="Chip" className="w-full h-full object-contain" />
                </div>
                <div className="text-2xl tracking-widest">
                  {formatCardNumber("1234567890123456")}
                </div>
              </div>
            </div>
            <div className="bottom-6 left-0 absolute px-6 w-full">
              <div className="flex justify-between">
                <div>
                  <div className="opacity-75 text-xs">Card Holder</div>
                  <div>FULL NAME</div>
                </div>
                <div>
                  <div className="opacity-75 text-xs">Expires</div>
                  <div>MM/YY</div>
                </div>
              </div>
            </div>
          </div>

          {/* Back of card */}
          <div className="absolute bg-gradient-to-br from-gray-900 to-gray-700 shadow-xl p-6 rounded-xl w-full h-full text-white rotate-y-180">
            <div className="bg-black mt-6 w-full h-12"></div>
            <div className="flex justify-end mt-8">
              <div className="flex justify-end items-center bg-white/30 pr-4 w-3/4 h-10">
                <div className="font-mono text-black">123</div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-xl mt-8 p-6 rounded-xl">
          <div className="space-y-4">
            <div>
              <label className="block font-medium text-gray-700 text-sm">Card Number</label>
              <input
                type="text"
                {...register('cardNumber', { 
                  required: 'Card number is required',
                  pattern: {
                    value: /^[0-9]{16}$/,
                    message: 'Please enter a valid card number'
                  }
                })}
                className="block shadow-sm mt-1 border-gray-300 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full"
                placeholder="1234 5678 9012 3456"
              />
              {errors.cardNumber && (
                <p className="mt-1 text-red-600 text-sm">{errors.cardNumber.message}</p>
              )}
            </div>

            <div>
              <label className="block font-medium text-gray-700 text-sm">Card Holder Name</label>
              <input
                type="text"
                {...register('cardHolder', { required: 'Card holder name is required' })}
                className="block shadow-sm mt-1 border-gray-300 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full"
                placeholder="Full Name"
              />
              {errors.cardHolder && (
                <p className="mt-1 text-red-600 text-sm">{errors.cardHolder.message}</p>
              )}
            </div>

            <div className="gap-4 grid grid-cols-2">
              <div>
                <label className="block font-medium text-gray-700 text-sm">Expiry Date</label>
                <input
                  type="text"
                  {...register('expiryDate', { 
                    required: 'Expiry date is required',
                    pattern: {
                      value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                      message: 'Please enter a valid date (MM/YY)'
                    }
                  })}
                  className="block shadow-sm mt-1 border-gray-300 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full"
                  placeholder="MM/YY"
                />
                {errors.expiryDate && (
                  <p className="mt-1 text-red-600 text-sm">{errors.expiryDate.message}</p>
                )}
              </div>

              <div>
                <label className="block font-medium text-gray-700 text-sm">CVV</label>
                <input
                  type="text"
                  {...register('cvv', { 
                    required: 'CVV is required',
                    pattern: {
                      value: /^[0-9]{3,4}$/,
                      message: 'Please enter a valid CVV'
                    }
                  })}
                  onFocus={() => setIsFlipped(true)}
                  onBlur={() => setIsFlipped(false)}
                  className="block shadow-sm mt-1 border-gray-300 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full"
                  placeholder="123"
                />
                {errors.cvv && (
                  <p className="mt-1 text-red-600 text-sm">{errors.cvv.message}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreditCard;