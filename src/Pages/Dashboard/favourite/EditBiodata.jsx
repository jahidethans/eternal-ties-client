import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const EditBiodata = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  // Height options in feet
  const heightOptions = [
    '4 feet', '4 feet 1 inch', '4 feet 2 inches', '4 feet 3 inches', '4 feet 4 inches',
    '4 feet 5 inches', '4 feet 6 inches', '4 feet 7 inches', '4 feet 8 inches', '4 feet 9 inches',
    '4 feet 10 inches', '4 feet 11 inches', '5 feet', '5 feet 1 inch', '5 feet 2 inches',
    '5 feet 3 inches', '5 feet 4 inches', '5 feet 5 inches', '5 feet 6 inches', '5 feet 7 inches',
    '5 feet 8 inches', '5 feet 9 inches', '5 feet 10 inches', '5 feet 11 inches', '6 feet',
    '6 feet 1 inch', '6 feet 2 inches', '6 feet 3 inches', '6 feet 4 inches', '6 feet 5 inches',
    '6 feet 6 inches', '6 feet 7 inches', '6 feet 8 inches', '6 feet 9 inches', '6 feet 10 inches',
    '6 feet 11 inches', '7 feet', '7 feet 1 inch', '7 feet 2 inches', '7 feet 3 inches', '7 feet 4 inches',
    '7 feet 5 inches', '7 feet 6 inches', '7 feet 7 inches', '7 feet 8 inches', '7 feet 9 inches',
    '7 feet 10 inches', '7 feet 11 inches', '8 feet', '8 feet 1 inch', '8 feet 2 inches', '8 feet 3 inches',
    '8 feet 4 inches', '8 feet 5 inches', '8 feet 6 inches', '8 feet 7 inches', '8 feet 8 inches',
    '8 feet 9 inches', '8 feet 10 inches', '8 feet 11 inches', '9 feet', '9 feet 1 inch', '9 feet 2 inches',
    '9 feet 3 inches', '9 feet 4 inches', '9 feet 5 inches', '9 feet 6 inches', '9 feet 7 inches',
    '9 feet 8 inches', '9 feet 9 inches', '9 feet 10 inches', '9 feet 11 inches', '10 feet'
  ];
  // Weight options in pounds
  const weightOptions = Array.from({ length: 200 }, (_, index) => (index + 1).toString()); // Assuming a range from 1 to 200 pounds


  const handleUpsertBiodata = (event) => {
    event.preventDefault();
    const form = event.target;

    const biodataType = form.biodataType.value;
    const name = form.name.value;
    const image = form.image.value;
    const dateOfBirth = form.dateOfBirth.value;
    const height = form.ownHeight.value;
    const weight = form.ownWeight.value;
    const age = parseInt(form.ownAge.value, 10);
    const occupation = form.occupation.value;
    const race = form.race.value;
    const fathersName = form.fathersName.value;
    const mothersName = form.mothersName.value;
    const permanentDivision = form.permanentDivision.value;
    const presentDivision = form.presentDivision.value;
    const expectedPartnerAge = form.partnersAge.value;
    const expectedPartnerHeight = form.partnersHeight.value;
    const expectedPartnerWeight = form.partnersWeight.value;
    const contactEmail = user.email;
    const mobileNumber = form.number.value;

    const biodata = {
      biodataType,
      name,
      image,
      dateOfBirth,
      height,
      weight,
      age,
      occupation,
      race,
      fathersName,
      mothersName,
      permanentDivision,
      presentDivision,
      expectedPartnerAge,
      expectedPartnerHeight,
      expectedPartnerWeight,
      contactEmail,
      mobileNumber,
    };

    console.log(biodata);

    axiosPublic.post('/biodatas', biodata)  // Fix the variable name here
      .then((res) => {
        toast.success('Biodata added successfully!');
      })
      .then(() => {
        // navigate('/dashboard');
      })
      .catch((error) => console.log(error));
  }





  return (
    <div>
      <div className="my-5">
        <p className="text-lg pl-3">If you don't already have a biodata, create one or update your existing biodata here:</p>
      </div>
      <div className="block max-w-full rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <form onSubmit={handleUpsertBiodata}>
          <div className="grid lg:grid-cols-2 container mx-auto gap-4 font-bold">

            <div className="flex items-center justify-center">
              {/* <!--biodata type input--> */}
              Biodata Type:
              <select name="biodataType" className="mb-6 ml-4 flex-1 font-normal" required>
                <option value="Male">male</option>
                <option value="Female">female</option>

              </select>
            </div>

            <div className="flex items-center justify-center font-bold">
              {/* <!--First name input--> */}
              Name:
              <input
                type="text"
                name="name"
                label="First name"
                placeholder="name"
                className="mb-6 ml-4 flex-1 font-normal"
              ></input>
            </div>
            <div className="flex items-center justify-center font-bold">
              {/* <!--Profile image input--> */}
              Image link:
              <input
                type="text"
                label="image"
                name="image"
                placeholder="image"
                className="mb-6 ml-4 flex-1 font-normal"
              ></input>
            </div>
            <div className="flex items-center justify-center font-bold">
              {/* <!--Date of birth input--> */}
              Date of birth:
              <input
                type="date"
                label="date"
                name="dateOfBirth"
                className="mb-6 ml-4 flex-1 font-normal"
              ></input>
            </div>

            <div className="flex items-center justify-center font-bold">
              {/* <!--Height input--> */}
              Height:
              <select name="ownHeight" className="mb-6 ml-4 flex-1 font-normal" required>
                <option value="">Select Height</option>
                {heightOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center justify-center font-bold">
              {/* <!--Weight input--> */}
              Weight:
              <select name="ownWeight" className="mb-6 ml-4 flex-1 font-normal" required>
                <option value="">Select Weight</option>
                {weightOptions.map((option) => (
                  <option key={option} value={option}>{option} lbs</option>
                ))}
              </select>
            </div>

            <div className="flex items-center justify-center font-bold">
              {/* <!--Age input--> */}
              Age:
              <input
                type="number"
                placeholder="28"
                label="Age"
                name="ownAge"
                className="mb-6 ml-4 flex-1 font-normal"
              ></input>
            </div>

            <div className="flex items-center justify-center font-bold">
              {/* Occupation input */}
              Occupation:
              <select name="occupation" className="mb-6 ml-4 flex-1 font-normal" required>
                <option value="">Select Occupation</option>
                <option value="Engineer">Engineer</option>
                <option value="Teacher">Teacher</option>
                <option value="Doctor">Doctor</option>
                <option value="Artist">Artist</option>
                <option value="Entrepreneur">Entrepreneur</option>
              </select>
            </div>

            <div className="flex items-center justify-center font-bold">
              {/* race input */}
              Race:
              <select name="race" className="mb-6 ml-4 flex-1 font-normal" required>
                <option value="">Select Race</option>
                <option value="Caucasian">Caucasian</option>
                <option value="African American">African American</option>
                <option value="Asian">Asian</option>
                <option value="Hispanic">Hispanic</option>
                <option value="Native American">Native American</option>
              </select>
            </div>

            <div className="flex items-center justify-center font-bold">
              {/* <!--Fathers name input--> */}
              Fathers name:
              <input
                type="text"
                label="fathersname"
                placeholder="name"
                name="fathersName"
                className="mb-6 ml-4 flex-1 font-normal"
              ></input>
            </div>
            <div className="flex items-center justify-center font-bold">
              {/* <!--Mothers name input--> */}
              Mothers name:
              <input
                type="text"
                label="mothersname"
                placeholder="name"
                name="mothersName"
                className="mb-6 ml-4 flex-1 font-normal"
              ></input>
            </div>

            <div className="flex items-center justify-center font-bold">
              {/* Permanent Division input */}
              Permanent Division:
              <select name="permanentDivision" className="mb-6 ml-4 flex-1 font-normal" required>
                <option value="">Select Permanent Division</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chattagram">Chattagram</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Barisal">Barisal</option>
                <option value="Khulna">Khulna</option>
                <option value="Maymansign">Maymansign</option>
                <option value="Sylhet">Sylhet</option>

              </select>
            </div>
            <div className="flex items-center justify-center font-bold">
              {/* Present Division input */}
              Present Division:
              <select name="presentDivision" className="mb-6 ml-4 flex-1 font-normal" required>
                <option value="">Select Present Division</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chattagram">Chattagram</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Barisal">Barisal</option>
                <option value="Khulna">Khulna</option>
                <option value="Maymansign">Maymansign</option>
                <option value="Sylhet">Sylhet</option>

              </select>
            </div>

            <div className="flex items-center justify-center font-bold">
              {/* <!--Partners Age input--> */}
              Expected Partner Age:
              <input
                type="number"
                placeholder="28"
                label="Age"
                name="partnersAge"
                className="mb-6 ml-4 flex-1 font-normal"
              ></input>
            </div>

            <div
              className="flex items-center justify-center font-bold">
              {/* <!--Expected Partner Height input--> */}
              Expected Partner Height:
              <select name="partnersHeight" className="mb-6 ml-4 flex-1 font-normal" required>
                <option value="">Select Height</option>
                {heightOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center justify-center font-bold">
              {/* <!--Expected Partner Weight input--> */}
              Expected Partner Weight:
              <select name="partnersWeight" className="mb-6 ml-4 flex-1 font-normal" required>
                <option value="">Select Weight</option>
                {weightOptions.map((option) => (
                  <option key={option} value={option}>{option} lbs</option>
                ))}
              </select>
            </div>

            <div className="flex items-center justify-center font-bold">
              {/* <!--Email input--> */}
              Contact email:
              <input
                type="email"
                label="Email address font-normal"
                name="email"
                defaultValue={user.email}
                readOnly
                className="mb-6 ml-4 flex-1"
              ></input>

            </div>
            <div className="flex items-center justify-center font-bold">
              {/* <!--Number input--> */}
              Mobile Number:
              <input
                type="number"
                label="number"
                name="number"
                placeholder="+8800000000000"
                required
                className="mb-6 ml-4 flex-1 font-normal"
              ></input>

            </div>
          </div>



          <div className="w-full flex justify-center">
            {/* <!--Submit button--> */}
            <button
              type="submit"
              className="block w-fit rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]]"
            >
              Set up biodata
            </button>

          </div>


        </form>
      </div>
    </div>
  );
};

export default EditBiodata;