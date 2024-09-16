import { useEffect } from "react";

export default function TableDisplay() {
    //useEffect with GET request 
    //set emailId context to id passed as params for use in next steps of email-connect user flow
    useEffect(() => {
        setEmailId(emailTokenId);
    }, [emailTokenId]);

    useEffect(() => {
        const interval = setInterval(() => {
            if(index === loadingText.length - 1) {
                clearInterval(interval);
            } else {
                setIndex(val => val + 1)
            }
        }, 6000);

        // clean up interval on unmount
        return (()=>{
            clearInterval(interval);
        });
   
    }, [index])

    //mutate data 

    //map data to table with pagination 

    return(
        <>
        </>
    )
}