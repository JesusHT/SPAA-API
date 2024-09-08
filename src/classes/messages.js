const MESSAGES = {
    /*
        ERRORS
        // Format: ERROR_[MODULE]_[SPECIFIC_ERROR]
    */
    ERROR_ROLE_PERMISSION_DENIED : 'No tienes permiso para realizar esta acción.',
    ERROR_TOKEN_INVALID          : 'Token inválido o expirado.',
    ERROR_TOKEN_INVALID_FORMAT   : 'Formato del token invalido.',
    ERROR_TOKEN_REVOKED          : 'Token revocado.',
    ERROR_TOKEN_DOES_NOT_EXIST   : 'El token no existe.',
    ERROR_USER_NOT_FOUND         : 'No se ha encontrado el usuario.',
    ERROR_FETCH_FAILED           : 'Error al intentar obtener datos del usuario.',
    ERROR_AUTHENTICATION         : 'Nḿuero de trabajador y/o contraseña incorrectos',

    /*
        SUCCESS
        // Format: SUCCESS_[MODULE]_[SPECIFIC_SUCCESS]
    */
    SUCCESS_TOKEN_VALIDATION     : 'Token validado correctamente.',

    /*
        WARNING
        // Format: WARNING_[MODULE]_[SPECIFIC_WARNING]
    */   
    WARNING_NO_PERMISSION_TABLE  : 'No se encontro la tabla: ',
    WARNING_NO_PERMISSION_ROLE   : 'El rol no se ha encontrado',
};

module.exports = MESSAGES;
