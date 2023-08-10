import Member from "../models/Member.js";


export const getMember = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await Member.findById(id);
        res.status(200).json(user);
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

