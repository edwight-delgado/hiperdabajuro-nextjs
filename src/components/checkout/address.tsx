export default function Address() {
  return (
    <div className="card">
      <div className="p-6 card-body">
        <div className="form-check mb-4 form-check">
          <input
            id="addressRadioe9ca483b-96fc-416b-9223-639e7a2ef6f5"
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
          />
          <label
            htmlFor="addressRadioe9ca483b-96fc-416b-9223-639e7a2ef6f5"
            className="text-dark fw-semibold form-check-label"
          >
            Home
          </label>

          <p className="mb-6">
            Jitu Chauhan
            <br />
            4450 North Avenue Oakland, <br />
            Nebraska United States <br />
            402-776-1106
          </p>
          <span className="text-danger">Default address</span>
          <div className="mt-4">
            <a className="text-inherit" href="#">
              Edit
            </a>
            <a className="text-danger ms-3" href="#">
              Delete
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
