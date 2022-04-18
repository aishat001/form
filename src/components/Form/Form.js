import { useReducer, useState } from "react";


const formReducer = (state, event) => {
    if (event.reset) {
        return {
            firstname: "",
            lastname: "",
            email: "",
            gender: "",
            address: "",
            bio: "",
        }
    }
    return {
        ...state,
        [event.name]: event.value
    }
}

function Form() {
    const [value, setValue] = useReducer(formReducer, {})

    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset()

        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
            setSubmitted(true);
            // setValue({reset : true})
        }, 3000)

    }

    const handleChange = e => {
        setValue({
            name: e.target.name,
            value: e.target.value,
        });
    }


    return (
        <form onSubmit={handleSubmit} className="p-5 text-start">
            <h1>Form</h1>

            {submitting &&
                <div>
                    submitting
                </div>
            }

            <ul>
                {submitted &&
                    Object.entries(value).map(([name, value]) => (
                        <p key={name}><strong>{name}</strong> : {value.toString()}</p>
                    ))
                }

            </ul>

<div className=" col-12 col-md-7">
            <fieldset disabled={submitting} className=" form-group text-start mb-4">
                <label for="firstname">Name</label>

                <input name="firstname" id="firstname" className="form-control" value={value.firstname || ""} onChange={handleChange} />
            </fieldset>

            <fieldset disabled={submitting} className=" form-group text-start mb-4">
                <label>Lastname</label>

                <input name="lastname" className="form-control" value={value.lastname || ""} onChange={handleChange} />
            </fieldset>

            <fieldset disabled={submitting} className=" form-group text-start mb-4">
                <label> Email </label>

                <input name="email" className="form-control" value={value.email || ""} onChange={handleChange} />
            </fieldset>

            <fieldset disabled={submitting} className=" form-group text-start mb-4">
                <label for="gender">Gender</label>

                <select name="gender" className="form-control" id="gender" value={value.gender || ""} onChange={handleChange}>
                    <option value="">choose gender </option>
                    <option value="male">Male </option>
                    <option value="female">female </option>
                </select>
            </fieldset>

            <fieldset disabled={submitting} className=" form-group text-start mb-4">
                <label>Address</label>

                <input type="address" className="form-control" name="address" value={value.address || ""} onChange={handleChange} />

            </fieldset>

            <fieldset disabled={submitting} className=" form-group text-start mb-4">
                <label for="bio">    Bio            </label>

                <textarea name="bio" id="bio" className="form-control" value={value.bio || ""} onChange={handleChange}>

                </textarea>
            </fieldset>
</div>
            <button type="submit" className="btn btn-primary float-start">Submit</button>

        </form>
    );
}

export default Form;