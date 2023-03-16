import React from "react";
import { DChart } from "./DChart";

const DMain = () => {
  return (
    <>
      <main>
        <div className="pt-6 px-4">
          <div className="my-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-2xl sm:text-3xl leading-none font-bold text-teal-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-10 h-10 inline-block"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                      />
                    </svg>

                    <span> 2,340</span>
                  </span>
                  <h3 className="text-base font-normal text-gray-500">
                    Total Student
                  </h3>
                </div>
                <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                  14.6%
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-10 h-10 inline-block"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>

                    <span>5,355</span>
                  </span>
                  <h3 className="text-base font-normal text-gray-500">
                    Total Teacher
                  </h3>
                </div>
                <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                  32.9%
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-2xl sm:text-3xl leading-none font-bold text-teal-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-10 h-10 inline-block"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                      />
                    </svg>
                    <span> 385</span>
                  </span>
                  <h3 className="text-base font-normal text-gray-500">
                    Graduation Complete
                  </h3>
                </div>
                <div className="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
                  -2.7%
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
            <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <div className="flex-shrink-0">
                  <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                    385
                  </span>
                  <h3 className="text-base font-normal text-gray-500">
                    Regular Present of Students
                  </h3>
                </div>
                <div className="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                  12.5%
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              {/* <div id="main-chart"></div> */}
              <DChart />
            </div>
            <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    All Subject of this School
                  </h3>
                  <span className="text-base font-normal text-gray-500">
                    Class:{" "}
                    <span className="text-teal-500">Six to Intermediate</span>
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <button
                    href="#"
                    className="text-sm font-medium text-teal-600  hover:bg-rose-100 rounded-full duration-300  p-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 text-white hover:text-teal-600"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-col mt-8">
                <div className="overflow-x-auto rounded-lg">
                  <div className="align-middle inline-block min-w-full">
                    <div className="shadow overflow-hidden sm:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Transaction
                            </th>
                            <th
                              scope="col"
                              className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Date & Time
                            </th>
                            <th
                              scope="col"
                              className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Amount
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          <tr>
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                              Payment from{" "}
                              <span className="font-semibold">
                                Bonnie Green
                              </span>
                            </td>
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                              Apr 23 ,2021
                            </td>
                            <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                              $2300
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                              Payment refund to{" "}
                              <span className="font-semibold">#00910</span>
                            </td>
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                              Apr 23 ,2021
                            </td>
                            <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                              -$670
                            </td>
                          </tr>
                          <tr>
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                              Payment failed from{" "}
                              <span className="font-semibold">#087651</span>
                            </td>
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                              Apr 18 ,2021
                            </td>
                            <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                              $234
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                              Payment from{" "}
                              <span className="font-semibold">Lana Byrd</span>
                            </td>
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                              Apr 15 ,2021
                            </td>
                            <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                              $5000
                            </td>
                          </tr>
                          <tr>
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                              Payment from{" "}
                              <span className="font-semibold">Jese Leos</span>
                            </td>
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                              Apr 15 ,2021
                            </td>
                            <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                              $2300
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                              Payment from{" "}
                              <span className="font-semibold">
                                THEMESBERG LLC
                              </span>
                            </td>
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                              Apr 11 ,2021
                            </td>
                            <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                              $560
                            </td>
                          </tr>
                          <tr>
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                              Payment from{" "}
                              <span className="font-semibold">Lana Lysle</span>
                            </td>
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                              Apr 6 ,2021
                            </td>
                            <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                              $1437
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
            <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold leading-none text-gray-900">
                  Latest Customers
                </h3>
                <a
                  href="#"
                  className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
                >
                  View all
                </a>
              </div>
              <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200">
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://demo.themesberg.com/windster/images/users/neil-sims.png"
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          Neil Sims
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          <a
                            href="/"
                            className="__cf_email__"
                            data-cfemail="17727a767e7b57607e7973646372653974787a"
                          >
                            email
                          </a>
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        $320
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://demo.themesberg.com/windster/images/users/bonnie-green.png"
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          Bonnie Green
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          <a
                            href="/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="d4b1b9b5bdb894a3bdbab0a7a0b1a6fab7bbb9"
                          >
                            [email&#160;protected]
                          </a>
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        $3467
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://demo.themesberg.com/windster/images/users/michael-gough.png"
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          Michael Gough
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          <a
                            href="/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="57323a363e3b17203e3933242332257934383a"
                          >
                            [email&#160;protected]
                          </a>
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        $67
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://demo.themesberg.com/windster/images/users/thomas-lean.png"
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          Thomes Lean
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          <a
                            href="/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="284d45494144685f41464c5b5c4d5a064b4745"
                          >
                            [email&#160;protected]
                          </a>
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        $2367
                      </div>
                    </div>
                  </li>
                  <li className="pt-3 sm:pt-4 pb-0">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://demo.themesberg.com/windster/images/users/lana-byrd.png"
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          Lana Byrd
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          <a
                            href="/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="a2c7cfc3cbcee2d5cbccc6d1d6c7d08cc1cdcf"
                          >
                            [email&#160;protected]
                          </a>
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        $367
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
              <h3 className="text-xl leading-none font-bold text-gray-900 mb-10">
                Acquisition Overview
              </h3>
              <div className="block w-full overflow-x-auto">
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                        Top Channels
                      </th>
                      <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                        Users
                      </th>
                      <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="text-gray-500">
                      <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                        Organic Search
                      </th>
                      <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                        5,649
                      </td>
                      <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2 text-xs font-medium">30%</span>
                          <div className="relative w-full">
                            <div className="w-full bg-gray-200 rounded-sm h-2">
                              <div
                                className="bg-cyan-600 h-2 rounded-sm"
                                style={{ width: "30%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-gray-500">
                      <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                        Referral
                      </th>
                      <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                        4,025
                      </td>
                      <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2 text-xs font-medium">24%</span>
                          <div className="relative w-full">
                            <div className="w-full bg-gray-200 rounded-sm h-2">
                              <div
                                className="bg-orange-300 h-2 rounded-sm"
                                style={{ width: "24%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-gray-500">
                      <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                        Direct
                      </th>
                      <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                        3,105
                      </td>
                      <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2 text-xs font-medium">18%</span>
                          <div className="relative w-full">
                            <div className="w-full bg-gray-200 rounded-sm h-2">
                              <div
                                className="bg-teal-400 h-2 rounded-sm"
                                style={{ width: "18%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-gray-500">
                      <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                        Social
                      </th>
                      <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                        1251
                      </td>
                      <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2 text-xs font-medium">12%</span>
                          <div className="relative w-full">
                            <div className="w-full bg-gray-200 rounded-sm h-2">
                              <div
                                className="bg-pink-600 h-2 rounded-sm"
                                style={{ width: "12%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-gray-500">
                      <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                        Other
                      </th>
                      <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                        734
                      </td>
                      <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2 text-xs font-medium">9%</span>
                          <div className="relative w-full">
                            <div className="w-full bg-gray-200 rounded-sm h-2">
                              <div
                                className="bg-indigo-600 h-2 rounded-sm"
                                style={{ width: "9%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-gray-500">
                      <th className="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left">
                        Email
                      </th>
                      <td className="border-t-0 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 pb-0">
                        456
                      </td>
                      <td className="border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0">
                        <div className="flex items-center">
                          <span className="mr-2 text-xs font-medium">7%</span>
                          <div className="relative w-full">
                            <div className="w-full bg-gray-200 rounded-sm h-2">
                              <div
                                className="bg-purple-500 h-2 rounded-sm"
                                style={{ width: "7%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DMain;
