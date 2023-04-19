import React from 'react'

const ListIcons = ({checkList, size, fill}) => {
  return checkList ? (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M23.9999 10.9999C23.9999 11.2652 23.8946 11.5195 23.7071 11.7071C23.5195 11.8946 23.2652 11.9999 22.9999 11.9999H11.9999C11.7347 11.9999 11.4804 11.8946 11.2928 11.7071C11.1053 11.5195 10.9999 11.2652 10.9999 10.9999C10.9999 10.7347 11.1053 10.4804 11.2928 10.2928C11.4804 10.1053 11.7347 9.99995 11.9999 9.99995H22.9999C23.2652 9.99995 23.5195 10.1053 23.7071 10.2928C23.8946 10.4804 23.9999 10.7347 23.9999 10.9999ZM11.9999 3.99995H22.9999C23.2652 3.99995 23.5195 3.89459 23.7071 3.70705C23.8946 3.51952 23.9999 3.26516 23.9999 2.99995C23.9999 2.73473 23.8946 2.48038 23.7071 2.29284C23.5195 2.1053 23.2652 1.99995 22.9999 1.99995H11.9999C11.7347 1.99995 11.4804 2.1053 11.2928 2.29284C11.1053 2.48038 10.9999 2.73473 10.9999 2.99995C10.9999 3.26516 11.1053 3.51952 11.2928 3.70705C11.4804 3.89459 11.7347 3.99995 11.9999 3.99995ZM22.9999 17.9999H11.9999C11.7347 17.9999 11.4804 18.1053 11.2928 18.2928C11.1053 18.4804 10.9999 18.7347 10.9999 18.9999C10.9999 19.2652 11.1053 19.5195 11.2928 19.7071C11.4804 19.8946 11.7347 19.9999 11.9999 19.9999H22.9999C23.2652 19.9999 23.5195 19.8946 23.7071 19.7071C23.8946 19.5195 23.9999 19.2652 23.9999 18.9999C23.9999 18.7347 23.8946 18.4804 23.7071 18.2928C23.5195 18.1053 23.2652 17.9999 22.9999 17.9999ZM6.29245 0.292446L2.99995 3.5862L1.70745 2.29245C1.5198 2.1048 1.26531 1.99939 0.999946 1.99939C0.734582 1.99939 0.480086 2.1048 0.292446 2.29245C0.104805 2.48009 -0.00061035 2.73458 -0.000610352 2.99995C-0.000610354 3.26531 0.104805 3.51981 0.292446 3.70745L2.29245 5.70745C2.38532 5.80042 2.49561 5.87418 2.61701 5.92451C2.7384 5.97483 2.86853 6.00073 2.99995 6.00073C3.13136 6.00073 3.26149 5.97483 3.38289 5.92451C3.50428 5.87418 3.61457 5.80042 3.70745 5.70745L7.70745 1.70745C7.89509 1.5198 8.0005 1.26531 8.0005 0.999946C8.0005 0.734582 7.89509 0.480086 7.70745 0.292446C7.51981 0.104805 7.26531 -0.000610352 6.99995 -0.000610352C6.73458 -0.000610352 6.48009 0.104805 6.29245 0.292446ZM6.29245 8.29245L2.99995 11.5862L1.70745 10.2924C1.5198 10.1048 1.26531 9.99939 0.999946 9.99939C0.734582 9.99939 0.480086 10.1048 0.292446 10.2924C0.104805 10.4801 -0.000610352 10.7346 -0.000610352 10.9999C-0.000610352 11.1313 0.0252698 11.2614 0.0755525 11.3828C0.125835 11.5042 0.199535 11.6145 0.292446 11.7074L2.29245 13.7074C2.38532 13.8004 2.49561 13.8742 2.61701 13.9245C2.7384 13.9748 2.86853 14.0007 2.99995 14.0007C3.13136 14.0007 3.26149 13.9748 3.38289 13.9245C3.50428 13.8742 3.61457 13.8004 3.70745 13.7074L7.70745 9.70745C7.89509 9.51981 8.0005 9.26531 8.0005 8.99995C8.0005 8.73458 7.89509 8.48009 7.70745 8.29245C7.51981 8.1048 7.26531 7.99939 6.99995 7.99939C6.73458 7.99939 6.48009 8.1048 6.29245 8.29245ZM6.29245 16.2924L2.99995 19.5862L1.70745 18.2924C1.61454 18.1995 1.50424 18.1258 1.38284 18.0756C1.26145 18.0253 1.13134 17.9994 0.999946 17.9994C0.868551 17.9994 0.738442 18.0253 0.617049 18.0756C0.495656 18.1258 0.385356 18.1995 0.292446 18.2924C0.199535 18.3854 0.125835 18.4957 0.0755525 18.6171C0.0252698 18.7384 -0.000610352 18.8686 -0.000610352 18.9999C-0.000610352 19.1313 0.0252698 19.2614 0.0755525 19.3828C0.125835 19.5042 0.199535 19.6145 0.292446 19.7074L2.29245 21.7074C2.38532 21.8004 2.49561 21.8742 2.61701 21.9245C2.7384 21.9748 2.86853 22.0007 2.99995 22.0007C3.13136 22.0007 3.26149 21.9748 3.38289 21.9245C3.50428 21.8742 3.61457 21.8004 3.70745 21.7074L7.70745 17.7074C7.89509 17.5198 8.0005 17.2653 8.0005 16.9999C8.0005 16.7346 7.89509 16.4801 7.70745 16.2924C7.51981 16.1048 7.26531 15.9994 6.99995 15.9994C6.73458 15.9994 6.48009 16.1048 6.29245 16.2924Z"
				fill={fill}
			/>
		</svg>
  ) : (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M7 1C7 0.734784 7.10536 0.48043 7.29289 0.292893C7.48043 0.105357 7.73478 0 8 0H23C23.2652 0 23.5196 0.105357 23.7071 0.292893C23.8946 0.48043 24 0.734784 24 1C24 1.26522 23.8946 1.51957 23.7071 1.70711C23.5196 1.89464 23.2652 2 23 2H8C7.73478 2 7.48043 1.89464 7.29289 1.70711C7.10536 1.51957 7 1.26522 7 1ZM23 8H8C7.73478 8 7.48043 8.10536 7.29289 8.29289C7.10536 8.48043 7 8.73478 7 9C7 9.26522 7.10536 9.51957 7.29289 9.70711C7.48043 9.89464 7.73478 10 8 10H23C23.2652 10 23.5196 9.89464 23.7071 9.70711C23.8946 9.51957 24 9.26522 24 9C24 8.73478 23.8946 8.48043 23.7071 8.29289C23.5196 8.10536 23.2652 8 23 8ZM23 16H8C7.73478 16 7.48043 16.1054 7.29289 16.2929C7.10536 16.4804 7 16.7348 7 17C7 17.2652 7.10536 17.5196 7.29289 17.7071C7.48043 17.8946 7.73478 18 8 18H23C23.2652 18 23.5196 17.8946 23.7071 17.7071C23.8946 17.5196 24 17.2652 24 17C24 16.7348 23.8946 16.4804 23.7071 16.2929C23.5196 16.1054 23.2652 16 23 16ZM3 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2H3C3.26522 2 3.51957 1.89464 3.70711 1.70711C3.89464 1.51957 4 1.26522 4 1C4 0.734784 3.89464 0.48043 3.70711 0.292893C3.51957 0.105357 3.26522 0 3 0ZM3 8H1C0.734784 8 0.48043 8.10536 0.292893 8.29289C0.105357 8.48043 0 8.73478 0 9C0 9.26522 0.105357 9.51957 0.292893 9.70711C0.48043 9.89464 0.734784 10 1 10H3C3.26522 10 3.51957 9.89464 3.70711 9.70711C3.89464 9.51957 4 9.26522 4 9C4 8.73478 3.89464 8.48043 3.70711 8.29289C3.51957 8.10536 3.26522 8 3 8ZM3 16H1C0.734784 16 0.48043 16.1054 0.292893 16.2929C0.105357 16.4804 0 16.7348 0 17C0 17.2652 0.105357 17.5196 0.292893 17.7071C0.48043 17.8946 0.734784 18 1 18H3C3.26522 18 3.51957 17.8946 3.70711 17.7071C3.89464 17.5196 4 17.2652 4 17C4 16.7348 3.89464 16.4804 3.70711 16.2929C3.51957 16.1054 3.26522 16 3 16Z"
				fill={fill}
			/>
		</svg>
  );
}

export default ListIcons