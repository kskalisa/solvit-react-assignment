

const toastStyles = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    warning: 'bg-yellow-500 text-black',
}

export default function ToastContainer({ toasts }){
    return (
        <div className="fixed top-5 right-5 z-[9999] space-y-3">
            {toasts.map((toast) => (
                <div key={toast.id} 
                className={`px-4 py-3 rounded-lg shadow-lg text-white min-w-[250px] animate-slide-in ${toastStyles[toast.type]}`}>
                    {toast.message}
                </div>

            ))}

        </div>
    )
}
