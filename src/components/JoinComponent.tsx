import Button from './Button';

const JoinComponent = () => {
  return (
    <div className="flex-[1.2] flex flex-col gap-6">
      <h2 className="font-bold text-headline-size">Join our weekly digest</h2>
      <p className="text-sm text-subheadline-size">
        Get exclusive promotions & updates straight to your inbox.
      </p>
      <div
        id="emailContainer"
        className="flex flex-col gap-2 sm:flex-row w-full"
      >
        <input
          id="inputEmail"
          placeholder="Enter your email here"
          className="h-[60px] w-full rounded rounded-3xl bg-white text-primary-darken px-6"
        />
        <Button variant="secondary" className="relative sm:-ml-10 sm:w-[180px]">
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default JoinComponent;
