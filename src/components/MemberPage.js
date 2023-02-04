import { useNavigate, useParams } from "react-router"
import React, {useState, useEffect} from "react";
import MemberData from "../services/member";


const MemberPage = ({ memID }) => {

    let params = useParams();
    console.log("params");
    console.log(params);

    const navigate = useNavigate();

    const navigateLandingPage = () => {
        navigate("/");
    }

    const [member, setMember] = useState({
        id: null,
        member_name: "",
        state: "",
        chamber: "",
    })

    // useEffect(() => {
    //     const getMembmer = id => {
    //         MemberData.getMemberInfo(params.id)
    //         .then(response => {
    //             setMember(member.data)
    //         })
    //         .catch (e => {
    //             console.log(e);
    //         })
    //     }
    //     getMember(params.id);
    // }, [params.id]);

    return (
        <div className= "App">
            
        </div>
    )

}

export default MemberPage;