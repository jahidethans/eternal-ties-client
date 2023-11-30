

const HowItWorks = () => {
    return (
        <section className="bg-gray-100 py-16 my-10 container mx-auto">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">How Our Website Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-blue-500 text-white p-6 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9h9m-9 9a9 9 0 01-9-9m9 9v9"
                ></path>
              </svg>
            </div>
            <p className="text-lg font-semibold mb-2">Create Your Profile</p>
            <p className="text-gray-600">
              Users need to create a profile to get started on our website. Fill in your details to
              create a biodata.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-green-500 text-white p-6 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <p className="text-lg font-semibold mb-2">Find Biodatas</p>
            <p className="text-gray-600">
              Once your profile is created, you can search and find biodatas of others based on your
              preferences.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-indigo-500 text-white p-6 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth="2"
                  d="M21 13.255A12.044 12.044 0 0012 2.59 12.044 12.044 0 002.588 12 12.044 12.044 0 0012 21.41 12.044 12.044 0 0021.412 12"
                ></path>
              </svg>
            </div>
            <p className="text-lg font-semibold mb-2">Contact and Connect</p>
            <p className="text-gray-600">
              If you find a biodata you're interested in, you can contact and connect with them
              through our platform.
            </p>
          </div>
        </div>
      </div>
    </section>
    );
};

export default HowItWorks;