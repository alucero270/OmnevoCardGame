type Args = {
    status: "idle" | "success" | "error" | "loading" 
};

const ApiStatus = ({status}: Args) => {
    switch (status) {
        case "success":
            return <div> Success</div>;
        case "error":
            return <div> Error Communicating with the data backend</div>;
        case "loading":
            return <div> Loading...</div>;
        default: throw Error("Unknown API State");
    }        
};

export default ApiStatus;