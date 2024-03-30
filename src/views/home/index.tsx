// Next, React
import { FC, useEffect, useState } from "react";
import Link from "next/link";

// Wallet
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { ToastContainer } from "react-toastify";
import { LocationProvider, useLocation } from "../../contexts/LocationContext";
import GetUserGeolocationDialog from "../../components/GetUserGeolocationDialog";
// Store
import useUserSOLBalanceStore from "../../stores/useUserSOLBalanceStore";
import HomeHeroSection from "components/HomeHeroSection";
import MapSectionHomepage from "components/MapSectionHomePage";

export const HomeView: FC = ({}) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance);
  const { getUserSOLBalance } = useUserSOLBalanceStore();

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58());
      getUserSOLBalance(wallet.publicKey, connection);
    }
  }, [wallet.publicKey, connection, getUserSOLBalance]);

  return (
    <LocationProvider>
      <ToastContainer stacked theme="colored" position="top-center" />
      <GetUserGeolocationDialog />
      <div className="my-16 w-full flex flex-col md:grid-cols-2 gap-4">
        <div className="mx-auto md:w-10/12 w-11/12">
          <HomeHeroSection />
          <div className="md:col-span-5 md:row-span-1 md:col-start-1 md:row-start-3 mt-6">
            <MapSectionHomepage />
          </div>
        </div>
      </div>
    </LocationProvider>
  );
};
