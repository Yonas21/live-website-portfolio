import React from 'react';
import { FiMail, FiLinkedin, FiGithub, FiCalendar, FiMessageCircle, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
		<section
			id="contact"
			className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white py-20 sm:py-24 scroll-mt-24"
		>
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl sm:text-4xl font-bold mb-4">
							Let's Work Together
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
							I'm open to remote opportunities worldwide. Whether
							you have a project in mind or just want to chat
							about technology, I'd love to hear from you.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
						{/* Contact Info */}
						<div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-8 shadow-sm">
							<h3 className="text-xl font-semibold mb-6 text-brand-300">
								Get in Touch
							</h3>
							<div className="space-y-4">
								<div className="flex items-center gap-3">
									<div className="w-10 h-10 bg-brand-100 dark:bg-brand-900/20 rounded-lg flex items-center justify-center">
										<FiMail
											className="text-brand-600"
											size={20}
										/>
									</div>
									<div>
										<p className="font-medium">Email</p>
										<a
											href="mailto:yonalem21@gmail.com"
											className="text-brand-600 hover:text-brand-500 transition-colors"
										>
											yonalem21@gmail.com
										</a>
									</div>
								</div>

								<div className="flex items-center gap-3">
									<div className="w-10 h-10 bg-brand-100 dark:bg-brand-900/20 rounded-lg flex items-center justify-center">
										<FiMapPin
											className="text-brand-600"
											size={20}
										/>
									</div>
									<div>
										<p className="font-medium">Location</p>
										<p className="text-gray-600 dark:text-gray-400">
											Addis Ababa, Ethiopia
										</p>
									</div>
								</div>

								<div className="flex items-center gap-3">
									<div className="w-10 h-10 bg-brand-100 dark:bg-brand-900/20 rounded-lg flex items-center justify-center">
										<FiMessageCircle
											className="text-brand-600"
											size={20}
										/>
									</div>
									<div>
										<p className="font-medium">Languages</p>
										<p className="text-gray-600 dark:text-gray-400">
											English, Amharic, Tigrinya
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Quick Actions */}
						<div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-8 shadow-sm">
							<h3 className="text-xl font-semibold mb-6 text-brand-300">
								Quick Actions
							</h3>
							<div className="space-y-4">
								<a
									href="mailto:yonalem21@gmail.com?subject=Let's discuss a project"
									className="flex items-center gap-3 w-full p-4 bg-brand-600 hover:bg-brand-500 text-white rounded-lg transition-colors shadow-sm"
								>
									<FiMail size={20} />
									<span className="font-medium">
										Send me an email
									</span>
								</a>

								<a
									href="https://calendly.com/yonalem21"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-3 w-full p-4 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg transition-colors"
								>
									<FiCalendar size={20} />
									<span className="font-medium">
										Schedule a call
									</span>
								</a>

								<a
									href="/Yonas_Alem_Resume.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-3 w-full p-4 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg transition-colors"
								>
									<FiMessageCircle size={20} />
									<span className="font-medium">
										Download Resume
									</span>
								</a>
							</div>
						</div>
					</div>

					{/* Social Links */}
					<div className="text-center">
						<h3 className="text-lg font-semibold mb-6">
							Connect with me
						</h3>
						<div className="flex justify-center items-center gap-6">
							<a
								href="https://www.linkedin.com/in/yonasalem21"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors shadow-sm"
							>
								<FiLinkedin size={20} />
								<span>LinkedIn</span>
							</a>
							<a
								href="https://github.com/Yonas21"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 text-white rounded-lg transition-colors shadow-sm"
							>
								<FiGithub size={20} />
								<span>GitHub</span>
							</a>
						</div>
					</div>

					{/* Availability Status */}
					<div className="mt-12 text-center">
						<div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full">
							<div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
							<span className="text-sm font-medium">
								Available for new opportunities
							</span>
						</div>
						<p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
							I'm currently open to full-time remote positions and
							interesting freelance projects.
						</p>
					</div>
				</div>
			</div>
		</section>
  );
};

export default Contact;
