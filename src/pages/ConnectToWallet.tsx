import InputField from '../components/InputField';
import Button from '../components/Button';

const ConnectToWalletPage = () => {
  return (
    <div className="md:flex items-center justify-center">
      <div className="flex-1 w-full h-full">
        <img
          src="/Image Placeholder2.svg"
          alt="Image Placeholder"
          className="w-full h-full"
        />
      </div>
      <div className="flex-1">
        <div className="p-10 flex flex-col gap-8">
          <div className="max-w-[460px] flex flex-col gap-5">
            <h1 className="text-headline-size font-bold">Connect wallet</h1>
            <h2>
              Choose a wallet you want to connect. There are several wallet
              providers.
            </h2>
          </div>

          <div className="max-w-[330px] flex flex-col gap-2 justify-center items-center">
            <Button
              type="submit"
              variant="outline"
              className="w-full flex justify-start !pl-8 gap-2"
            >
              <img src="/wallet1.svg" />
              <span className="text-bold">Metamask</span>
            </Button>
            <Button
              type="submit"
              variant="outline"
              className="w-full flex justify-start !pl-8 gap-2"
            >
              <img src="/wallet2.svg" />
              <span className="text-bold">Wallet Connect</span>
            </Button>
            <Button
              type="submit"
              variant="outline"
              className="w-full flex justify-start !pl-8 gap-2"
            >
              <img src="/wallet3.svg" />
              <span className="text-bold">Coinbase</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectToWalletPage;
