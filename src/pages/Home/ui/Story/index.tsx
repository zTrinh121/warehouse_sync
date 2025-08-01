export function Story() {

  const highlightStyle = {
    background: 'linear-gradient(90deg, #6c63ff, #5bc0eb)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
    fontSize: '4rem',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
    letterSpacing: '2px',
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <section id="testimonies" className="py-20 rounded-lg bg-gradient-to-r from-sky-400/20 to-indigo-600/20">
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 md:text-center">
            <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
              <span style={highlightStyle}>Feedbacks</span>
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <ul className="space-y-8">
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/kanyewest"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Kanye West"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Kanye West
                        </h3>
                        <p className="text-gray-500 text-md">
                          Rapper &amp; Entrepreneur
                        </p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-500 text-md">
                      Find God.
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/tim_cook"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Tim Cook"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Tim Cook
                        </h3>
                        <p className="text-gray-500 text-md">CEO of Apple</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-500 text-md">
                      Diam quis enim lobortis scelerisque fermentum dui faucibus
                      in ornare. Donec pretium vulputate sapien nec sagittis
                      aliquam malesuada bibendum.
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/kanyewest"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Kanye West"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Kanye West
                        </h3>
                        <p className="text-gray-500 text-md">
                          Rapper &amp; Entrepreneur
                        </p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-500 text-md">
                      Find God.
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/tim_cook"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Tim Cook"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Tim Cook
                        </h3>
                        <p className="text-gray-500 text-md">CEO of Apple</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-500 text-md">
                      Diam quis enim lobortis scelerisque fermentum dui faucibus
                      in ornare. Donec pretium vulputate sapien nec sagittis
                      aliquam malesuada bibendum.
                    </p>
                  </div>
                </a>
              </div>
            </li>
          </ul>
          <ul className="hidden space-y-8 sm:block">
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a href="https://twitter.com/paraga" className="cursor-pointer">
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Parag Agrawal"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Parag Agrawal
                        </h3>
                        <p className="text-gray-500 text-md">CEO of Twitter</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-500 text-md">
                      Enim neque volutpat ac tincidunt vitae semper. Mattis
                      aliquam faucibus purus in massa tempor. Neque vitae tempus
                      quam pellentesque nec. Turpis cursus in hac habitasse
                      platea dictumst.
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/tim_cook"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Tim Cook"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Tim Cook
                        </h3>
                        <p className="text-gray-500 text-md">CEO of Apple</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-500 text-md">
                      Diam quis enim lobortis scelerisque fermentum dui faucibus
                      in ornare. Donec pretium vulputate sapien nec sagittis
                      aliquam malesuada bibendum.
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a href="https://twitter.com/paraga" className="cursor-pointer">
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Parag Agrawal"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Parag Agrawal
                        </h3>
                        <p className="text-gray-500 text-md">CEO of Twitter</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-500 text-md">
                      Enim neque volutpat ac tincidunt vitae semper. Mattis
                      aliquam faucibus purus in massa tempor. Neque vitae tempus
                      quam pellentesque nec. Turpis cursus in hac habitasse
                      platea dictumst.
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/tim_cook"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Tim Cook"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Tim Cook
                        </h3>
                        <p className="text-gray-500 text-md">CEO of Apple</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-500 text-md">
                      Diam quis enim lobortis scelerisque fermentum dui faucibus
                      in ornare. Donec pretium vulputate sapien nec sagittis
                      aliquam malesuada bibendum.
                    </p>
                  </div>
                </a>
              </div>
            </li>
          </ul>
          <ul className="hidden space-y-8 lg:block">
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/satyanadella"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Satya Nadella"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Satya Nadella
                        </h3>
                        <p className="text-gray-500 text-md">
                          CEO of Microsoft
                        </p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-500 text-md">
                      Tortor dignissim convallis aenean et tortor at. At
                      ultrices mi tempus imperdiet nulla malesuada. Id cursus
                      metus aliquam eleifend mi. Quis ipsum suspendisse ultrices
                      gravida dictum fusce ut.
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/dan_schulman"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Dan Schulman"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Dan Schulman
                        </h3>
                        <p className="text-gray-500 text-md">CEO of PayPal</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-500 text-md">
                      Quam pellentesque nec nam aliquam sem et tortor consequat
                      id. Enim sit amet venenatis urna cursus.
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/satyanadella"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Satya Nadella"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Satya Nadella
                        </h3>
                        <p className="text-gray-500 text-md">
                          CEO of Microsoft
                        </p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-500 text-md">
                      Tortor dignissim convallis aenean et tortor at. At
                      ultrices mi tempus imperdiet nulla malesuada. Id cursus
                      metus aliquam eleifend mi. Quis ipsum suspendisse ultrices
                      gravida dictum fusce ut.
                    </p>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
