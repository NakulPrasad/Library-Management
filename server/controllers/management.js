import Member from "../models/Member.js";


export const getMember = async (req, res) => {
    try {
        const { id } = req.params;
        const member = await Member.findById(id);
        res.status(200).json(member);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
export const getMembers = async (req, res) => {
    try {
        const members = await Member.find().select("-password");
        res.status(200).json(members);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//delete member
export const deleteMember = async (req, res) => {
    try {
        const { id } = req.params;
        await Member.findByIdAndDelete(id);
        res.status(201).json(id);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addMember = async (req, res) => {
    const member = req.body;
    const newMember = new Member(member);

    try {
        await newMember.save();

        res.status(201).json(newMember);
    } catch (error) {
        res.status(409).json(error.message)
    }
}

//updating member:
export const editMember = async (req, res) => {
    let member = req.body;
    const { id } = req.params;

    // Log incoming data for troubleshooting
    // console.log(`Editing member with ID ${id} with data`, member);

    try {
        // Try to update the member
        const updatedMember = await Member.findOneAndUpdate({ _id: id }, member, { new: true });

        // If successful, return updated member
        res.status(201).json(updatedMember);
    } catch (error) {
        // Log the error details
        console.log('Error details:', error);
        res.status(409).json({ message: error.message });
    }
};

