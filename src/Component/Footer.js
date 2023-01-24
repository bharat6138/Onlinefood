import React from "react";
import logo from "../../assets/img/logo_web.png";
export const Footer = () => {
	return (
		<>
			{/* Footer */}
			<div className="osahan-menu-fotter fixed-bottom bg-white px-3 py-2 text-center d-none">
				<div className="row">
					<div className="col selected">
						<a
							href="/"
							className="text-danger small font-weight-bold text-decoration-none"
						>
							<p className="h4 m-0">
								<i className="feather-home text-danger" />
							</p>
							Home
						</a>
					</div>
					<div className="col">
						<a
							href="/"
							className="text-dark small font-weight-bold text-decoration-none"
						>
							<p className="h4 m-0">
								<i className="feather-map-pin" />
							</p>
							Trending
						</a>
					</div>
					<div className="col bg-white rounded-circle mt-n4 px-3 py-2">
						<div className="bg-danger rounded-circle mt-n0 shadow">
							<a
								href="/"
								className="text-white small font-weight-bold text-decoration-none"
							>
								<i className="feather-shopping-cart" />
							</a>
						</div>
					</div>
					<div className="col">
						<a
							href="/"
							className="text-dark small font-weight-bold text-decoration-none"
						>
							<p className="h4 m-0">
								<i className="feather-heart" />
							</p>
							Favorites
						</a>
					</div>
					<div className="col">
						<a
							href="/"
							className="text-dark small font-weight-bold text-decoration-none"
						>
							<p className="h4 m-0">
								<i className="feather-user" />
							</p>
							Profile
						</a>
					</div>
				</div>
			</div>
			{/* footer */}
			<footer className="section-footer border-top bg-dark">
				<div className="container">
					<section className="footer-top padding-y py-5">
						<div className="row">
							<aside className="col-md-4 footer-about">
								<article className="d-flex pb-3">
									<div>
										<img alt="#" src={logo} className="logo-footer mr-3" />
									</div>
									<div>
										<h6 className="title text-white">About Us</h6>
										<p className="text-muted">
											Some short text about company like You might remember the Dell
											computer commercials in which a youth reports.
										</p>
										<div className="d-flex align-items-center">
											<a
												className="btn btn-icon btn-outline-light mr-1 btn-sm"
												title="Facebook"
												target="_blank"
												href="/"
											>
												<i className="feather-facebook" />
											</a>
											<a
												className="btn btn-icon btn-outline-light mr-1 btn-sm"
												title="Instagram"
												target="_blank"
												href="/"
											>
												<i className="feather-instagram" />
											</a>
											<a
												className="btn btn-icon btn-outline-light mr-1 btn-sm"
												title="Youtube"
												target="_blank"
												href="/"
											>
												<i className="feather-youtube" />
											</a>
											<a
												className="btn btn-icon btn-outline-light mr-1 btn-sm"
												title="Twitter"
												target="_blank"
												href="/"
											>
												<i className="feather-twitter" />
											</a>
										</div>
									</div>
								</article>
							</aside>
							<aside className="col-sm-3 col-md-2 text-white">
								<h6 className="title">Error Pages</h6>
								<ul className="list-unstyled hov_footer">
									<li>
										<a href="/" className="text-muted">
											Not found
										</a>
									</li>
									<li>
										<a href="/" className="text-muted">
											Maintence
										</a>
									</li>
									<li>
										<a href="/" className="text-muted">
											Coming Soon
										</a>
									</li>
								</ul>
							</aside>
							<aside className="col-sm-3 col-md-2 text-white">
								<h6 className="title">Services</h6>
								<ul className="list-unstyled hov_footer">
									<li>
										<a href="/" className="text-muted">
											Delivery Support
										</a>
									</li>
									<li>
										<a href="/" className="text-muted">
											Contact Us
										</a>
									</li>
									<li>
										<a href="/" className="text-muted">
											Terms of use
										</a>
									</li>
									<li>
										<a href="/" className="text-muted">
											Privacy policy
										</a>
									</li>
								</ul>
							</aside>
							<aside className="col-sm-3  col-md-2 text-white">
								<h6 className="title">For users</h6>
								<ul className="list-unstyled hov_footer">
									<li>
										<a href="/" className="text-muted">
											User Login{" "}
										</a>
									</li>
									<li>
										<a href="/" className="text-muted">
											User register{" "}
										</a>
									</li>
									<li>
										<a href="/" className="text-muted">
											Forgot Password{" "}
										</a>
									</li>
									<li>
										<a href="/" className="text-muted">
											Account Setting{" "}
										</a>
									</li>
								</ul>
							</aside>
							<aside className="col-sm-3  col-md-2 text-white">
								<h6 className="title">More Pages</h6>
								<ul className="list-unstyled hov_footer">
									<li>
										<a href="/" className="text-muted">
											Trending{" "}
										</a>
									</li>
									<li>
										<a href="/" className="text-muted">
											Most popular{" "}
										</a>
									</li>
									<li>
										<a href="/" className="text-muted">
											Restaurant Details{" "}
										</a>
									</li>
									<li>
										<a href="/" className="text-muted">
											Favorites{" "}
										</a>
									</li>
								</ul>
							</aside>
						</div>
						{/* row.// */}
					</section>
					{/* footer-top.// */}
					<section className="footer-center border-top padding-y py-5">
						<h6 className="title text-white">Countries</h6>
						<div className="row">
							<aside className="col-sm-2 col-md-2 text-white">
								<ul className="list-unstyled hov_footer">
									<li>
										<a href="/" className="text-muted">
											India
										</a>
									</li>
									<li>
										<a href="/" className="text-muted">
											Indonesia
										</a>
									</li>
									<li>
										<a href="/" className="text-muted">
											Ireland
										</a>
									</li>
									<li>
										<a href="/" className="text-muted">
											Italy
										</a>
									</li>
									<li>
										<a href="/" className="text-muted">
											Lebanon
										</a>
									</li>
								</ul>
							</aside>
							<aside className="col-sm-2 col-md-2 text-white">
								<ul className="list-unstyled hov_footer">
									<li>
										<a href="/" className="text-muted">
											Malaysia
										</a>
									</li>
									<li>
										<a href="/" className="text-muted">
											New Zealand
										</a>
									</li>
									<li>
										<a href="/" className="text-muted">
											Philippines
										</a>
									</li>
									<li>
										<a href="/" className="text-muted">
											Poland
										</a>
									</li>
									<li>
										<a href="/" className="text-muted">
											Portugal
										</a>
									</li>
								</ul>
							</aside>
							<aside className="col-sm-2 col-md-2 text-white">
								<ul className="list-unstyled hov_footer">
									<li>
										<a href="/" className="text-muted">
											Australia
										</a>
									</li>
									<li>
										<a href="/" className="text-muted">
											Brasil
										</a>
									</li>
									<li>
										<a href="/" className="text-muted">
											Canada
										</a>
									</li>
									<li>
										<a href="/" className="text-muted">
											Chile
										</a>
									</li>
									<li>
										<a href="/" className="text-muted">
											Czech Republic
										</a>
									</li>
								</ul>
							</aside>
							<aside className="col-sm-2 col-md-2 text-white">
								<ul className="list-unstyled hov_footer">
									<li>
										<a href="/" className="text-muted">
											Turkey
										</a>
									</li>
									<li>
										<a href="/" className="text-muted">
											UAE
										</a>
									</li>
									<li>
										<a href="/" className="text-muted">
											United Kingdom
										</a>
									</li>
									<li>
										<a href="/" className="text-muted">
											United States
										</a>
									</li>
									<li>
										<a href="/" className="text-muted">
											Sri Lanka
										</a>
									</li>
								</ul>
							</aside>
							<aside className="col-sm-2 col-md-2 text-white">
								<ul className="list-unstyled hov_footer">
									<li>
										<a href="/" className="text-muted">
											Qatar
										</a>
									</li>
									<li>
										<a href="/" className="text-muted">
											Singapore
										</a>
									</li>
									<li>
										<a href="/" className="text-muted">
											Slovakia
										</a>
									</li>
									<li>
										<a href="/" className="text-muted">
											South Africa
										</a>
									</li>
									<li>
										<a href="/" className="text-muted">
											Green Land
										</a>
									</li>
								</ul>
							</aside>
							<aside className="col-sm-2 col-md-2 text-white">
								<ul className="list-unstyled hov_footer">
									<li>
										<a href="/" className="text-muted">
											Pakistan
										</a>
									</li>
									<li>
										<a href="/" className="text-muted">
											Bangladesh
										</a>
									</li>
									<li>
										<a href="/" className="text-muted">
											Bhutaan
										</a>
									</li>
									<li>
										<a href="/" className="text-muted">
											Nepal
										</a>
									</li>
								</ul>
							</aside>
						</div>
						{/* row.// */}
					</section>
				</div>
				{/* //container */}
				<section className="footer-copyright border-top py-3 bg-light">
					<div className="container d-flex align-items-center">
						<p className="mb-0"> © 2023 Company All rights reserved </p>
						<p className="text-muted mb-0 ml-auto d-flex align-items-center">
							<a href="/" className="d-block">
								<img alt="#" src="img/appstore.png" height={40} />
							</a>
							<a href="/" className="d-block ml-3">
								<img alt="#" src="img/playmarket.png" height={40} />
							</a>
						</p>
					</div>
				</section>
			</footer>
		</>
	);
};
