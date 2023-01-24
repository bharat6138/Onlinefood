import React, { useEffect } from "react";
import logo from "../../assets/img/logo_web.png";
import { Link } from "react-router-dom";
export const Header = () => {
	useEffect(() => {
		(function ($) {
			var Nav;
			// initialize hc-offcanvas-nav()
			Nav = $("#main-nav").hcOffcanvasNav({
				disableAt: false,
				customToggle: ".toggle",
				levelSpacing: 40,
				navTitle: "Food Villa",
				levelTitles: true,
				levelTitleAsBack: true,
				pushContent: "#container",
				insertClose: 2,
			});
			// close event
		})(jQuery);
	}, []);

	return (
		<>
			<header
				className="section-header"
				style={{ position: "relative", zIndex: "99" }}
			>
				<section className="header-main shadow-sm bg-white">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-1">
								<a href="/" className="brand-wrap mb-0">
									<img alt="#" className="img-fluid" src={logo} />
								</a>
								{/* brand-wrap.// */}
							</div>
							<div className="col-3 d-flex align-items-center m-none">
								<div className="dropdown mr-3">
									<a
										className="text-dark dropdown-toggle d-flex align-items-center py-3"
										href="#"
										id="navbarDropdown"
										role="button"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
										<div>
											<i className="feather-map-pin mr-2 bg-light rounded-pill p-2 icofont-size" />
										</div>
										<div>
											<p className="text-muted mb-0 small">Select Location</p>
											Shalimar Bagh
										</div>
									</a>
									<div
										className="dropdown-menu p-0 drop-loc"
										aria-labelledby="navbarDropdown"
									>
										<div className="osahan-country">
											<div className="search_location bg-primary p-3 text-right">
												<div className="input-group rounded shadow-sm overflow-hidden">
													<div className="input-group-prepend">
														<button className="border-0 btn btn-outline-secondary text-dark bg-white btn-block">
															<i className="feather-search" />
														</button>
													</div>
													<input
														type="text"
														className="shadow-none border-0 form-control"
														placeholder="Enter Your Location"
													/>
												</div>
											</div>
											<div className="p-3 border-bottom">
												<a href="/" className="text-decoration-none">
													<p className="font-weight-bold text-primary m-0">
														<i className="feather-navigation" /> Shalimar Bagh, Delhi
													</p>
												</a>
											</div>
											<div className="filter">
												<h6 className="px-3 py-3 bg-light pb-1 m-0 border-bottom">
													Choose your Location
												</h6>
												<div className="custom-control  border-bottom px-0 custom-radio">
													<input
														type="radio"
														id="customRadio1"
														name="location"
														className="custom-control-input"
													/>
													<label
														className="custom-control-label py-3 w-100 px-3"
														htmlFor="customRadio1"
													>
														KeshavPuram
													</label>
												</div>
												<div className="custom-control  border-bottom px-0 custom-radio">
													<input
														type="radio"
														id="customRadio2"
														name="location"
														className="custom-control-input"
														defaultChecked
													/>
													<label
														className="custom-control-label py-3 w-100 px-3"
														htmlFor="customRadio2"
													>
														Pitampura
													</label>
												</div>
												<div className="custom-control  border-bottom px-0 custom-radio">
													<input
														type="radio"
														id="customRadio3"
														name="location"
														className="custom-control-input"
													/>
													<label
														className="custom-control-label py-3 w-100 px-3"
														htmlFor="customRadio3"
													>
														Parshant Vihar
													</label>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* col.// */}
							<div className="col-8">
								<div className="d-flex align-items-center justify-content-end pr-5">
									{/* offers */}

									<Link
										to="/offers"
										className="widget-header mr-4 text-white btn bg-primary m-none"
									>
										<div className="icon d-flex align-items-center">
											<i className="feather-disc h6 mr-2 mb-0" /> <span>Offers</span>
										</div>
									</Link>
									{/* signin */}
									<a href="/" className="widget-header mr-4 text-dark m-none">
										<div className="icon d-flex align-items-center">
											<i className="feather-user h6 mr-2 mb-0" /> <span>Sign in</span>
										</div>
									</a>
									{/* my account */}
									<div className="dropdown mr-4 m-none">
										<a
											href="#"
											className="dropdown-toggle text-dark py-3 d-block"
											id="dropdownMenuButton"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
										>
											<img
												alt="#"
												src="https://www.jea.com/cdn/images/avatar/avatar-alt.svg"
												className="img-fluid rounded-circle header-user mr-2 header-user"
											/>{" "}
											Hi Osahan
										</a>
										<div
											className="dropdown-menu dropdown-menu-right"
											aria-labelledby="dropdownMenuButton"
										>
											<a className="dropdown-item" href="/">
												My account
											</a>
											<a className="dropdown-item" href="/">
												Delivery support
											</a>
											<a className="dropdown-item" href="/">
												Contant us
											</a>
											<a className="dropdown-item" href="/">
												Term of use
											</a>
											<a className="dropdown-item" href="/">
												Privacy policy
											</a>
											<a className="dropdown-item" href="/">
												Logout
											</a>
										</div>
									</div>
									{/* signin */}
									<a href="/" className="widget-header mr-4 text-dark">
										<div className="icon d-flex align-items-center">
											<i className="feather-shopping-cart h6 mr-2 mb-0" />{" "}
											<span>Cart</span>
										</div>
									</a>
									<a className="toggle" href="#">
										<span></span>
									</a>
								</div>
								{/* widgets-wrap.// */}
							</div>
							{/* col.// */}
						</div>
						{/* row.// */}
					</div>
					{/* container.// */}
				</section>
				{/* header-main .// */}
			</header>
			<nav id="main-nav">
				<ul className="second-nav">
					<li>
						<a href="/">
							<i className="feather-home mr-2" /> Homepage
						</a>
					</li>
					<li>
						<a href="#">
							<i className="feather-edit-2 mr-2" /> Authentication
						</a>
						<ul>
							<li>
								<a href="/">Login</a>
							</li>
							<li>
								<a href="/">Register</a>
							</li>
							<li>
								<a href="/">orgot Password</a>
							</li>
							<li>
								<a href="/">Verification</a>
							</li>
							<li>
								<a href="/">Location</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="/">
							<i className="feather-heart mr-2" /> Favorites
						</a>
					</li>
					<li>
						<a href="/">
							<i className="feather-trending-up mr-2" /> Trending
						</a>
					</li>
					<li>
						<a href="/">
							<i className="feather-award mr-2" /> Most Popular
						</a>
					</li>
					<li>
						<a href="/">
							<i className="feather-paperclip mr-2" /> Restaurant Detail
						</a>
					</li>
				</ul>
				<ul className="bottom-nav">
					<li className="email">
						<a className="text-danger" href="/">
							<p className="h5 m-0">
								<i className="feather-home text-danger" />
							</p>
							Home
						</a>
					</li>
					<li className="github">
						<a href="/">
							<p className="h5 m-0">
								<i className="feather-message-circle" />
							</p>
							FAQ
						</a>
					</li>
					<li className="ko-fi">
						<a href="/">
							<p className="h5 m-0">
								<i className="feather-phone" />
							</p>
							Help
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
};
