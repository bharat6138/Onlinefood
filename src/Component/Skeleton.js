import React from "react";

export const Skeleton = () => {
	return (
		<div className="card">
			<div className="header">
				<div className="img" />
			</div>
			<div className="content">
				<div className="line" />
				<div className="line line-2" />
				<div className="flex-item">
					<div className="line line-3" />
					<div className="line line-3" />
					<div className="line line-3" />
				</div>
			</div>
		</div>
	);
};

export const Skeletonimg = () => {
	return <div className="imgslid" />;
};

export const SkeletonMenu = () => {
	return (
		<div className="card">
			<div className="header">
				<div className="img" />
			</div>
			<div className="content">
				<div className="line" />
				<div className="line line-2" />
				<div className="flex-item">
					<div className="line line-3" />
					<div className="line line-3" />
					<div className="line line-3" />
				</div>
			</div>
		</div>
	);
};
