const fabinocciService = require("../services/fabinocciService");
const joi = require("joi");


const fabinocciSeriesCheckJoi = joi.object({
    input: joi.number().required().greater(1)
});

module.exports = {
    // make function to validate input
    fabinocciSeriesCheck: async (request, response) => {

        try {
            // validate datatype &  not 0 checks
            var validate = await fabinocciSeriesCheckJoi().validateAsync(request.body);
            if (validate.error) {
                respond.send(error);
            }

            // validation successful so now send input to service for fabinocci series function
            const result = await fabinocciService.fabinocciSeries(validate);
            response.send(result);

        } catch (error) {
            response.send(error);
        }
    }
}