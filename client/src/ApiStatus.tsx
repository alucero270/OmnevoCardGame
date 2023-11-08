type Args = {
    status: "idle" | "success" | "error" | "loading" 
};

const ApiStatus = ({status}: Args) => {
    switch (status) {
        case "success":
            return <div> Success</div>;
        case "error":
            return <div> Error communicating with the data backend</div>;
        case "loading":
            return <div className="text-center align-center"> Select a player below to start </div>;
        default: throw Error("Unknown API State");
    }        
};

export default ApiStatus;