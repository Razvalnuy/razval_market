import { ClerkLoaded, SignedIn, SignIn, UserButton } from "@clerk/nextjs"
import { currentUser } from "@clerk/nextjs/server"
import Container from "./Container"
import HeaderMenu from "./HeaderMenu"
import Logo from "./Logo"

const Header = async () => {
	const user = await currentUser()
	console.log("user", user)
	return (
		<header
			className="py-5 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_8%,transparent_0,transparent_50%,rgba(255,255,255,0.05)_0,rgba(255,255,255,0.05)_58%,transparent_0,transparent_100%)]
    bg-size-[32px_32px]"
		>
			<Container className="flex items-center justify-between text-lightColor">
				<div className="w-auto md:w-1/3 flex items-center justify-start gap-2.5 md:gap-0">
					<Logo />
				</div>
				<HeaderMenu />
				<div className="md:w-1/3 flex items-center w-auto justify-end gap-5">
					<ClerkLoaded>
						<SignedIn>
							<div className=" flex justify-center rounded-2xl hover:bg-white/30 hover:scale-110 transition-all shadow-[0_0_20px_#00FF7F] ring-2 ring-[#00FF7F]/50 group">
								<UserButton />
							</div>
						</SignedIn>
						{!user && <SignIn />}
					</ClerkLoaded>
				</div>
			</Container>
		</header>
	)
}

export default Header
