import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import WavesIcon from '@mui/icons-material/Waves';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGuest, logoutUser } from '../redux/actions';

const Navigation = () => {
	const pages = ['Lovere', 'Alloggi', 'Prenota'];
	const pagesLinks = ['/lovere', '/units', '/book'];
	const dispatch = useDispatch();

	const hasRole = useSelector((state) => state.authReducer.role);
	const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated);

	useEffect(() => {
		if (isAuthenticated) {
			dispatch(getGuest());
		}
	}, [hasRole, isAuthenticated, dispatch]);

	console.log(hasRole, isAuthenticated);

	const [anchorElNav, setAnchorElNav] = useState(null);
	const [anchorElUser, setAnchorElUser] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = (props, event) => {
		setAnchorElNav(null);
	};

	const handleCloseMainMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = (action) => {
		setAnchorElUser(null);
		if (action === 'logout') {
			dispatch(logoutUser());
		}
	};

	return (
		<>
			<AppBar position="static" variant="info">
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<WavesIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
						<Typography
							variant="h6"
							noWrap
							component="a"
							href="/"
							sx={{
								mr: 2,
								display: { xs: 'none', md: 'flex' },
								fontWeight: 700,
								fontSize: '3rem',
								color: '#faf3dd',
								textDecoration: 'none',
							}}
						>
							CASA SUL LAGO
						</Typography>

						<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="#aed9e0"
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: 'block', md: 'none' },
								}}
							>
								{pages.map((page) => (
									<MenuItem key={page} onClick={handleCloseNavMenu}>
										<Typography textAlign="center" variant="secondary">
											{page}
										</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
						<WavesIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }} />
						<Typography
							variant="h5"
							noWrap
							component="a"
							href=""
							sx={{
								mr: 2,
								display: { xs: 'flex', md: 'none' },
								flexGrow: 1,
								fontWeight: 700,
								fontSize: '3rem',
								color: '#aed9e0',
								textDecoration: 'none',
							}}
						>
							CASA SUL LAGO
						</Typography>
						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							{pages.map((page, index) => (
								<Button
									key={page}
									component="a"
									href={pagesLinks[index]}
									onClick={handleCloseMainMenu}
									variant="secondary"
									sx={{ my: 2, display: 'block' }}
								>
									{page}
								</Button>
							))}
						</Box>

						<Box sx={{ flexGrow: 0 }}>
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<AccountCircleIcon sx={{ fontSize: '3rem' }} color="secondary" />
							</IconButton>

							<Menu
								sx={{ mt: '45px' }}
								id="menu-appbar"
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								{isAuthenticated && hasRole === 'guest' ? (
									<>
										<MenuItem component="a" href="/me" onClick={() => handleCloseUserMenu('me')}>
											Profilo
										</MenuItem>
										<MenuItem component="a" href="/bookings" onClick={() => handleCloseUserMenu('bookings')}>
											Prenotazioni
										</MenuItem>
										<MenuItem component="a" href="/home" onClick={() => handleCloseUserMenu('logout')}>
											Logout
										</MenuItem>
									</>
								) : isAuthenticated && hasRole === 'admin' ? (
									<>
										<MenuItem component="a" href="/admin" onClick={() => handleCloseUserMenu('admin')}>
											Bacheca
										</MenuItem>
										<MenuItem component="a" href="/home" onClick={() => handleCloseUserMenu('logout')}>
											Logout
										</MenuItem>
									</>
								) : (
									<>
										<MenuItem component="a" href="/login" onClick={() => handleCloseUserMenu('login')}>
											Log In
										</MenuItem>
									</>
								)}
							</Menu>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</>
	);
};

export default Navigation;
