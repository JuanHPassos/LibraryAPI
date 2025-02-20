import CastError from "../errors/CastError.js";

async function page (req, res, next) {
    try {
        let { limit = 5, page = 1, sorting = "_id:-1" } = req.query;

        let [sortField, order] = sorting.split(":");

        limit = parseInt(limit);
        page = parseInt(page);
        order = parseInt(order);

        const result = req.result;

        if(limit > 0 && page > 0){
            // return everything in book collection
            const pageResult = await result.find({})
                .sort({ [sortField]: order })
                .skip((page - 1)*limit)
                .limit(limit)
                .exec();

            res.status(200).json(pageResult);
        } else {
        next(new CastError());
        }
    } catch (error) {
        next(error);
    }
}

export default page;