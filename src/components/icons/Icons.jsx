import React from 'react'

export const LighteningWelcome = () => {
  return (
		<svg
			width="16"
			height="22"
			viewBox="0 0 16 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M15.5445 10.1552C15.5184 10.045 15.4656 9.94296 15.3906 9.85811C15.3157 9.77326 15.2209 9.70823 15.1148 9.6688L10.1639 7.81169L11.4237 1.5099C11.4523 1.36348 11.4324 1.21175 11.3671 1.07761C11.3019 0.943478 11.1947 0.83421 11.0619 0.766297C10.9291 0.698385 10.7778 0.675514 10.6309 0.701136C10.4839 0.726757 10.3493 0.799481 10.2473 0.908334L0.622264 11.2208C0.54409 11.3032 0.487539 11.4037 0.457662 11.5132C0.427785 11.6228 0.425512 11.738 0.451047 11.8487C0.476582 11.9593 0.52913 12.0619 0.603996 12.1473C0.678861 12.2327 0.773713 12.2982 0.880076 12.338L5.83265 14.1951L4.57625 20.4901C4.54772 20.6365 4.56759 20.7882 4.63286 20.9223C4.69812 21.0565 4.80525 21.1657 4.93807 21.2337C5.07088 21.3016 5.22219 21.3244 5.36914 21.2988C5.5161 21.2732 5.65073 21.2005 5.75273 21.0916L15.3777 10.7791C15.4545 10.6967 15.5098 10.5967 15.5389 10.488C15.568 10.3792 15.5699 10.2649 15.5445 10.1552ZM6.39898 18.3906L7.29875 13.8892C7.33095 13.7295 7.30543 13.5637 7.22674 13.4211C7.14805 13.2785 7.0213 13.1685 6.86906 13.1106L2.32812 11.4047L9.60015 3.61365L8.70125 8.11505C8.66905 8.2747 8.69456 8.44059 8.77325 8.58318C8.85194 8.72577 8.9787 8.83579 9.13094 8.89365L13.6684 10.5952L6.39898 18.3906Z"
				fill="#D4B3FF"
			/>
		</svg>
  );
}

export const DashBoardIcon = ({size, fill}) => {
  return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 28 19"
			fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke='white'
		>
			<path
				d="M23.8825 4.08374C22.5862 2.78456 21.0456 1.75483 19.3495 1.05393C17.6534 0.353035 15.8352 -0.00516255 14 -6.14635e-06H13.95C6.25875 0.0262439 0 6.37499 0 14.1412V17C0 17.5304 0.210714 18.0391 0.585786 18.4142C0.960859 18.7893 1.46957 19 2 19H26C26.5304 19 27.0391 18.7893 27.4142 18.4142C27.7893 18.0391 28 17.5304 28 17V14C28.0051 12.1567 27.6438 10.3308 26.9369 8.62845C26.23 6.92609 25.1918 5.38124 23.8825 4.08374ZM26 17H12.9637L19.8088 7.58749C19.9649 7.373 20.0294 7.10526 19.9882 6.84318C19.9469 6.5811 19.8032 6.34614 19.5888 6.18999C19.3743 6.03385 19.1065 5.9693 18.8444 6.01056C18.5824 6.05182 18.3474 6.1955 18.1912 6.40999L10.49 17H2V14.1412C2 13.7562 2.01875 13.3762 2.05375 13H5C5.26522 13 5.51957 12.8946 5.70711 12.7071C5.89464 12.5196 6 12.2652 6 12C6 11.7348 5.89464 11.4804 5.70711 11.2929C5.51957 11.1054 5.26522 11 5 11H2.40875C3.69875 6.14249 7.90875 2.46999 13 2.04249V4.99999C13 5.26521 13.1054 5.51956 13.2929 5.7071C13.4804 5.89464 13.7348 5.99999 14 5.99999C14.2652 5.99999 14.5196 5.89464 14.7071 5.7071C14.8946 5.51956 15 5.26521 15 4.99999V2.04124C17.4808 2.25002 19.8356 3.22412 21.7389 4.82894C23.6422 6.43377 25.0001 8.5901 25.625 11H23C22.7348 11 22.4804 11.1054 22.2929 11.2929C22.1054 11.4804 22 11.7348 22 12C22 12.2652 22.1054 12.5196 22.2929 12.7071C22.4804 12.8946 22.7348 13 23 13H25.9587C25.985 13.3312 26 13.6637 26 14V17Z"
				fill={fill}
			/>
		</svg>
  );
}

export const SettingsIcon = ({size, fill}) => {
  return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 25 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0.72998 4C0.72998 3.73478 0.835338 3.48043 1.02287 3.29289C1.21041 3.10536 1.46476 3 1.72998 3H5.72998C5.9952 3 6.24955 3.10536 6.43709 3.29289C6.62462 3.48043 6.72998 3.73478 6.72998 4C6.72998 4.26522 6.62462 4.51957 6.43709 4.70711C6.24955 4.89464 5.9952 5 5.72998 5H1.72998C1.46476 5 1.21041 4.89464 1.02287 4.70711C0.835338 4.51957 0.72998 4.26522 0.72998 4ZM23.73 15H18.73V13C18.73 12.7348 18.6246 12.4804 18.4371 12.2929C18.2496 12.1054 17.9952 12 17.73 12C17.4648 12 17.2104 12.1054 17.0229 12.2929C16.8353 12.4804 16.73 12.7348 16.73 13V19C16.73 19.2652 16.8353 19.5196 17.0229 19.7071C17.2104 19.8946 17.4648 20 17.73 20C17.9952 20 18.2496 19.8946 18.4371 19.7071C18.6246 19.5196 18.73 19.2652 18.73 19V17H23.73C23.9952 17 24.2496 16.8946 24.4371 16.7071C24.6246 16.5196 24.73 16.2652 24.73 16C24.73 15.7348 24.6246 15.4804 24.4371 15.2929C24.2496 15.1054 23.9952 15 23.73 15ZM13.73 15H1.72998C1.46476 15 1.21041 15.1054 1.02287 15.2929C0.835338 15.4804 0.72998 15.7348 0.72998 16C0.72998 16.2652 0.835338 16.5196 1.02287 16.7071C1.21041 16.8946 1.46476 17 1.72998 17H13.73C13.9952 17 14.2496 16.8946 14.4371 16.7071C14.6246 16.5196 14.73 16.2652 14.73 16C14.73 15.7348 14.6246 15.4804 14.4371 15.2929C14.2496 15.1054 13.9952 15 13.73 15ZM9.72998 8C9.9952 8 10.2496 7.89464 10.4371 7.70711C10.6246 7.51957 10.73 7.26522 10.73 7V5H23.73C23.9952 5 24.2496 4.89464 24.4371 4.70711C24.6246 4.51957 24.73 4.26522 24.73 4C24.73 3.73478 24.6246 3.48043 24.4371 3.29289C24.2496 3.10536 23.9952 3 23.73 3H10.73V1C10.73 0.734784 10.6246 0.48043 10.4371 0.292893C10.2496 0.105357 9.9952 0 9.72998 0C9.46476 0 9.21041 0.105357 9.02287 0.292893C8.83534 0.48043 8.72998 0.734784 8.72998 1V7C8.72998 7.26522 8.83534 7.51957 9.02287 7.70711C9.21041 7.89464 9.46476 8 9.72998 8Z"
				fill={fill}
			/>
		</svg>
  );
}

export const LighteningIcon = ({size, fill}) => {
  return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 23 30"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M22.9738 13.7712C22.9359 13.611 22.8591 13.4625 22.75 13.3391C22.641 13.2157 22.5032 13.1211 22.3488 13.0637L15.1475 10.3625L16.98 1.19625C17.0215 0.983272 16.9926 0.76258 16.8977 0.567473C16.8028 0.372365 16.6469 0.213429 16.4538 0.114648C16.2606 0.015866 16.0405 -0.0174009 15.8267 0.0198669C15.613 0.0571348 15.4172 0.162915 15.2688 0.321246L1.26879 15.3212C1.15508 15.4411 1.07283 15.5872 1.02937 15.7465C0.985913 15.9059 0.982607 16.0735 1.01975 16.2345C1.05689 16.3954 1.13332 16.5447 1.24222 16.6689C1.35111 16.7931 1.48908 16.8884 1.64379 16.9462L8.84754 19.6475L7.02004 28.8037C6.97855 29.0167 7.00745 29.2374 7.10238 29.4325C7.19732 29.6276 7.35314 29.7866 7.54632 29.8853C7.73951 29.9841 7.95959 30.0174 8.17334 29.9801C8.3871 29.9429 8.58293 29.8371 8.73129 29.6787L22.7313 14.6787C22.8429 14.5589 22.9234 14.4135 22.9657 14.2552C23.008 14.097 23.0108 13.9308 22.9738 13.7712ZM9.67129 25.75L10.98 19.2025C11.0269 18.9703 10.9898 18.729 10.8753 18.5216C10.7608 18.3142 10.5765 18.1542 10.355 18.07L3.75004 15.5887L14.3275 4.25625L13.02 10.8037C12.9732 11.036 13.0103 11.2773 13.1248 11.4847C13.2392 11.6921 13.4236 11.8521 13.645 11.9362L20.245 14.4112L9.67129 25.75Z"
				fill={fill}
			/>
		</svg>
  );
}

export const UsersIcon = ({size, fill}) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 32 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M14.6562 14.74C15.9964 13.8477 17.014 12.5478 17.5583 11.0326C18.1027 9.51727 18.1449 7.86703 17.6788 6.32587C17.2127 4.78471 16.2631 3.43445 14.9702 2.47478C13.6774 1.5151 12.11 0.996948 10.4999 0.996948C8.88984 0.996948 7.32249 1.5151 6.02965 2.47478C4.73682 3.43445 3.78714 4.78471 3.32105 6.32587C2.85497 7.86703 2.89722 9.51727 3.44156 11.0326C3.9859 12.5478 5.00344 13.8477 6.34369 14.74C3.9193 15.6335 1.84882 17.287 0.44119 19.4537C0.36721 19.5637 0.315823 19.6873 0.290017 19.8172C0.26421 19.9472 0.264499 20.0811 0.290866 20.2109C0.317234 20.3408 0.369154 20.4641 0.443608 20.5738C0.518063 20.6834 0.613566 20.7772 0.724568 20.8496C0.83557 20.922 0.959855 20.9716 1.0902 20.9955C1.22054 21.0195 1.35435 21.0173 1.48383 20.989C1.61332 20.9608 1.73591 20.9071 1.84446 20.8311C1.95302 20.7551 2.04539 20.6583 2.11619 20.5462C3.02418 19.1497 4.26664 18.0021 5.73074 17.2077C7.19484 16.4133 8.8342 15.9972 10.4999 15.9972C12.1657 15.9972 13.805 16.4133 15.2691 17.2077C16.7332 18.0021 17.9757 19.1497 18.8837 20.5462C19.0304 20.7642 19.2569 20.9157 19.5144 20.968C19.7719 21.0203 20.0396 20.9691 20.2597 20.8256C20.4797 20.6821 20.6345 20.4577 20.6904 20.201C20.7464 19.9443 20.6991 19.6758 20.5587 19.4537C19.1511 17.287 17.0806 15.6335 14.6562 14.74ZM4.99994 8.49999C4.99994 7.41219 5.32251 6.34883 5.92686 5.44436C6.5312 4.53988 7.39019 3.83494 8.39518 3.41865C9.40017 3.00237 10.506 2.89345 11.5729 3.10567C12.6398 3.31789 13.6198 3.84171 14.389 4.6109C15.1582 5.38009 15.682 6.3601 15.8943 7.42699C16.1065 8.49389 15.9976 9.59976 15.5813 10.6048C15.165 11.6097 14.46 12.4687 13.5556 13.0731C12.6511 13.6774 11.5877 14 10.4999 14C9.04176 13.9983 7.64377 13.4183 6.61268 12.3873C5.58159 11.3562 5.00159 9.95817 4.99994 8.49999ZM31.2674 20.8375C31.0453 20.9823 30.7747 21.033 30.5153 20.9784C30.2558 20.9238 30.0286 20.7683 29.8837 20.5462C28.9768 19.1489 27.7345 18.0008 26.2701 17.2067C24.8057 16.4126 23.1658 15.9978 21.4999 16C21.2347 16 20.9804 15.8946 20.7928 15.7071C20.6053 15.5196 20.4999 15.2652 20.4999 15C20.4999 14.7348 20.6053 14.4804 20.7928 14.2929C20.9804 14.1053 21.2347 14 21.4999 14C22.3099 13.9992 23.1097 13.8196 23.8422 13.4739C24.5747 13.1282 25.2218 12.625 25.7372 12.0002C26.2527 11.3754 26.6238 10.6445 26.824 9.85971C27.0243 9.07489 27.0487 8.25553 26.8956 7.46018C26.7424 6.66482 26.4155 5.91311 25.9382 5.25874C25.4609 4.60437 24.8449 4.0635 24.1343 3.67478C23.4237 3.28606 22.6361 3.05909 21.8276 3.01007C21.0191 2.96106 20.2098 3.09121 19.4574 3.39124C19.3348 3.44427 19.2027 3.47217 19.0691 3.4733C18.9355 3.47443 18.803 3.44876 18.6794 3.39782C18.5559 3.34687 18.4438 3.27168 18.3498 3.17668C18.2558 3.08168 18.1818 2.96881 18.1322 2.84473C18.0825 2.72065 18.0583 2.58788 18.0608 2.45426C18.0634 2.32065 18.0927 2.1889 18.147 2.06681C18.2013 1.94471 18.2796 1.83474 18.3771 1.7434C18.4747 1.65205 18.5895 1.58119 18.7149 1.53499C20.4368 0.848305 22.3519 0.823594 24.0909 1.46562C25.8298 2.10766 27.2694 3.37094 28.1319 5.01176C28.9944 6.65259 29.2187 8.55469 28.7616 10.3511C28.3044 12.1476 27.1981 13.7111 25.6562 14.74C28.0806 15.6335 30.1511 17.287 31.5587 19.4537C31.7035 19.6759 31.7542 19.9464 31.6996 20.2059C31.645 20.4654 31.4895 20.6926 31.2674 20.8375Z"
				fill={fill}
			/>
		</svg>
	);
}

export const AddUserIcon = ({fill, size}) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 30 23"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M30 14C30 14.2652 29.8947 14.5196 29.7071 14.7071C29.5196 14.8946 29.2653 15 29 15H27V17C27 17.2652 26.8947 17.5196 26.7071 17.7071C26.5196 17.8946 26.2653 18 26 18C25.7348 18 25.4805 17.8946 25.2929 17.7071C25.1054 17.5196 25 17.2652 25 17V15H23C22.7348 15 22.4805 14.8946 22.2929 14.7071C22.1054 14.5196 22 14.2652 22 14C22 13.7348 22.1054 13.4804 22.2929 13.2929C22.4805 13.1054 22.7348 13 23 13H25V11C25 10.7348 25.1054 10.4804 25.2929 10.2929C25.4805 10.1054 25.7348 9.99999 26 9.99999C26.2653 9.99999 26.5196 10.1054 26.7071 10.2929C26.8947 10.4804 27 10.7348 27 11V13H29C29.2653 13 29.5196 13.1054 29.7071 13.2929C29.8947 13.4804 30 13.7348 30 14ZM22.7663 21.3562C22.937 21.5595 23.02 21.8222 22.9971 22.0866C22.9741 22.351 22.847 22.5955 22.6438 22.7662C22.4406 22.937 22.1778 23.02 21.9134 22.997C21.649 22.974 21.4045 22.847 21.2338 22.6437C18.7188 19.6487 15.2613 18 11.5 18C7.73879 18 4.28129 19.6487 1.76629 22.6437C1.59556 22.8468 1.35115 22.9737 1.08685 22.9966C0.822536 23.0194 0.559973 22.9364 0.356917 22.7656C0.15386 22.5949 0.026944 22.3505 0.00408805 22.0862C-0.018768 21.8219 0.0643084 21.5593 0.235041 21.3562C2.10254 19.1337 4.42504 17.555 7.00629 16.71C5.43867 15.7336 4.23169 14.2733 3.56796 12.5498C2.90423 10.8264 2.81985 8.93371 3.3276 7.15806C3.83535 5.38242 4.9076 3.82045 6.38213 2.70847C7.85665 1.59649 9.65323 0.994995 11.5 0.994995C13.3469 0.994995 15.1434 1.59649 16.618 2.70847C18.0925 3.82045 19.1647 5.38242 19.6725 7.15806C20.1802 8.93371 20.0959 10.8264 19.4321 12.5498C18.7684 14.2733 17.5614 15.7336 15.9938 16.71C18.575 17.555 20.8975 19.1337 22.7663 21.3562ZM11.5 16C12.7856 16 14.0423 15.6188 15.1112 14.9045C16.1802 14.1903 17.0133 13.1752 17.5053 11.9874C17.9972 10.7997 18.1259 9.49278 17.8751 8.23191C17.6243 6.97103 17.0053 5.81284 16.0962 4.9038C15.1872 3.99476 14.029 3.37569 12.7681 3.12489C11.5073 2.87409 10.2003 3.00281 9.0126 3.49478C7.82488 3.98675 6.80972 4.81987 6.09549 5.88879C5.38126 6.95771 5.00004 8.21442 5.00004 9.49999C5.00203 11.2233 5.68748 12.8754 6.90604 14.094C8.1246 15.3126 9.77674 15.998 11.5 16Z"
				fill={fill}
			/>
		</svg>
	);
}

export const AffliateIcon = ({fill, size}) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 26 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M8.50005 12H2.00005C1.7233 11.9991 1.44976 11.9407 1.19673 11.8286C0.943696 11.7165 0.716683 11.5531 0.530051 11.3487C0.340732 11.1412 0.196631 10.8966 0.106897 10.6304C0.0171636 10.3642 -0.0162422 10.0823 0.00880089 9.8025C0.178613 7.92879 0.753755 6.11441 1.69438 4.48504C2.635 2.85568 3.91862 1.45029 5.4563 0.366248C5.68345 0.205583 5.94162 0.0940793 6.21431 0.0388641C6.48701 -0.016351 6.76822 -0.0140628 7.03998 0.0455828C7.31174 0.105228 7.56806 0.220919 7.79256 0.385259C8.01707 0.549599 8.20481 0.758974 8.3438 0.999998L11.5938 6.625C11.6595 6.73876 11.7021 6.86433 11.7192 6.99456C11.7363 7.12478 11.7276 7.25711 11.6936 7.38398C11.6596 7.51084 11.601 7.62977 11.521 7.73397C11.441 7.83816 11.3413 7.92559 11.2276 7.99125C11.1138 8.05691 10.9882 8.09952 10.858 8.11665C10.7278 8.13378 10.5954 8.12509 10.4686 8.09108C10.3417 8.05707 10.2228 7.99841 10.1186 7.91844C10.0144 7.83847 9.92696 7.73876 9.8613 7.625L6.6113 2C5.30994 2.9167 4.22349 4.10544 3.42724 5.4838C2.631 6.86217 2.14402 8.3972 2.00005 9.9825C1.9998 9.98629 2.00047 9.99008 2.00199 9.99356C2.00351 9.99704 2.00585 10.0001 2.0088 10.0025L8.50005 10C8.76527 10 9.01962 10.1054 9.20716 10.2929C9.39469 10.4804 9.50005 10.7348 9.50005 11C9.50005 11.2652 9.39469 11.5196 9.20716 11.7071C9.01962 11.8946 8.76527 12 8.50005 12ZM25.9913 9.8025C25.8215 7.92879 25.2463 6.11441 24.3057 4.48504C23.3651 2.85568 22.0815 1.45029 20.5438 0.366248C20.3167 0.205583 20.0585 0.0940793 19.7858 0.0388641C19.5131 -0.016351 19.2319 -0.0140628 18.9601 0.0455828C18.6884 0.105228 18.432 0.220919 18.2075 0.385259C17.983 0.549599 17.7953 0.758974 17.6563 0.999998L14.4126 6.625C14.3469 6.73876 14.3043 6.86433 14.2871 6.99456C14.27 7.12478 14.2787 7.25711 14.3127 7.38398C14.3814 7.6402 14.5491 7.85864 14.7788 7.99125C15.0085 8.12386 15.2816 8.15977 15.5378 8.09108C15.6646 8.05707 15.7836 7.99841 15.8878 7.91844C15.992 7.83847 16.0794 7.73876 16.1451 7.625L19.3951 2C20.695 2.91758 21.7801 4.10665 22.5752 5.48494C23.3703 6.86322 23.8565 8.3978 24.0001 9.9825C24.0001 9.99125 24.0001 9.9975 24.0001 10H17.5001C17.2348 10 16.9805 10.1054 16.7929 10.2929C16.6054 10.4804 16.5001 10.7348 16.5001 11C16.5001 11.2652 16.6054 11.5196 16.7929 11.7071C16.9805 11.8946 17.2348 12 17.5001 12H24.0001C24.2768 11.9991 24.5503 11.9407 24.8034 11.8286C25.0564 11.7165 25.2834 11.5531 25.4701 11.3487C25.6594 11.1412 25.8035 10.8966 25.8932 10.6304C25.9829 10.3642 26.0163 10.0823 25.9913 9.8025ZM16.1163 14.3975C16.0506 14.2837 15.9632 14.184 15.859 14.1041C15.7548 14.0241 15.6359 13.9654 15.509 13.9314C15.3822 13.8974 15.2498 13.8887 15.1196 13.9058C14.9894 13.923 14.8638 13.9656 14.7501 14.0312C14.6363 14.0969 14.5366 14.1843 14.4566 14.2885C14.3766 14.3927 14.318 14.5117 14.284 14.6385C14.25 14.7654 14.2413 14.8977 14.2584 15.0279C14.2755 15.1582 14.3181 15.2837 14.3838 15.3975L17.6138 20.9887C16.1672 21.655 14.5934 22 13.0007 22C11.408 22 9.83419 21.655 8.38755 20.9887L11.6163 15.3975C11.682 15.2837 11.7246 15.1582 11.7417 15.0279C11.7588 14.8977 11.7501 14.7654 11.7161 14.6385C11.6821 14.5117 11.6235 14.3927 11.5435 14.2885C11.4635 14.1843 11.3638 14.0969 11.2501 14.0312C11.1363 13.9656 11.0107 13.923 10.8805 13.9058C10.7503 13.8887 10.6179 13.8974 10.4911 13.9314C10.3642 13.9654 10.2453 14.0241 10.1411 14.1041C10.0369 14.184 9.94946 14.2837 9.8838 14.3975L6.6563 19.9887C6.51733 20.2292 6.42997 20.496 6.39979 20.7721C6.3696 21.0482 6.39725 21.3276 6.48098 21.5924C6.56471 21.8572 6.70267 22.1017 6.88609 22.3102C7.0695 22.5188 7.29435 22.6869 7.5463 22.8037C9.25643 23.5919 11.1171 24 13.0001 24C14.883 24 16.7437 23.5919 18.4538 22.8037C18.7058 22.6869 18.9306 22.5188 19.114 22.3102C19.2974 22.1017 19.4354 21.8572 19.5191 21.5924C19.6028 21.3276 19.6305 21.0482 19.6003 20.7721C19.5701 20.496 19.4828 20.2292 19.3438 19.9887L16.1163 14.3975ZM13.0001 12.5C13.2967 12.5 13.5867 12.412 13.8334 12.2472C14.0801 12.0824 14.2723 11.8481 14.3859 11.574C14.4994 11.2999 14.5291 10.9983 14.4712 10.7074C14.4134 10.4164 14.2705 10.1491 14.0607 9.93934C13.8509 9.72956 13.5837 9.5867 13.2927 9.52882C13.0017 9.47094 12.7001 9.50065 12.426 9.61418C12.1519 9.72771 11.9177 9.91997 11.7528 10.1666C11.588 10.4133 11.5001 10.7033 11.5001 11C11.5001 11.3978 11.6581 11.7794 11.9394 12.0607C12.2207 12.342 12.6022 12.5 13.0001 12.5Z"
				fill={fill}
			/>
		</svg>
	);
}

export const PlusIcon = ({size, fill}) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M24 12C24 12.2652 23.8946 12.5196 23.7071 12.7071C23.5196 12.8946 23.2652 13 23 13H13V23C13 23.2652 12.8946 23.5196 12.7071 23.7071C12.5196 23.8946 12.2652 24 12 24C11.7348 24 11.4804 23.8946 11.2929 23.7071C11.1054 23.5196 11 23.2652 11 23V13H1C0.734784 13 0.48043 12.8946 0.292893 12.7071C0.105357 12.5196 0 12.2652 0 12C0 11.7348 0.105357 11.4804 0.292893 11.2929C0.48043 11.1054 0.734784 11 1 11H11V1C11 0.734784 11.1054 0.48043 11.2929 0.292893C11.4804 0.105357 11.7348 0 12 0C12.2652 0 12.5196 0.105357 12.7071 0.292893C12.8946 0.48043 13 0.734784 13 1V11H23C23.2652 11 23.5196 11.1054 23.7071 11.2929C23.8946 11.4804 24 11.7348 24 12Z"
				fill={fill}
			/>
		</svg>
	);
}