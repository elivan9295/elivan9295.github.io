const Divider: React.FC = () => {
    return (
    <div className="flex items-center justify-center w-full my-16">
        <div className="flex-1 border-t border-green"></div>
        <img
            src="/assets/ficod.png"
            className="w-32 h-auto mx-6"
            alt="Icon"
        />

        <div className="flex-1 border-t border-green"></div>
        </div>
    );
}

export default Divider;