export default function Footer() {
    return (
        <div className='bg-orange-500 py-10'>
            <div className='container mx-auto flex flex-col md:flex-row gap-2 md:gap-0 md:justify-between items-center'>
                <span className='text-3xl text-white font-bold tracking-wide'>
                    Feastly
                </span>
                <span className='text-white font-bold tracking-tight flex gap-4'>
                    <span>Privacy Policy</span>
                    <span>Terms of Services</span>
                </span>
            </div>
        </div>
    );
}
