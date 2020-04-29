exports.proveType = (type,value) =>
{
    if(''+type === type ) {
        type = type.toLowerCase()
    } else {
        return 
    }

    if( type === 'boolean' ) {
        return !!value === value

    }else if( type === 'number' ) {
        return +value === value

    }else if( type === 'string' ) {
        return ''+value === value
    }
}
