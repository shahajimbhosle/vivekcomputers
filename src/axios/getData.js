import axios from 'axios';

const baseURL = 'https://www.vivekcomputers.org';

const serialize = obj => {
    if( !obj ) {
        return '';
    }

    let str = [];

    for ( let p in obj ) {
      if ( obj.hasOwnProperty( p ) ) {
        str.push( `${encodeURIComponent( p )}=${encodeURIComponent( obj[p] )}` );
      }
    }
      
    return str.join('&');
  }

const get = ( page, parameters ) => {
    let url = `${baseURL}/${page}?${serialize( parameters )}`;
    return axios.get( url );
}

// Custom get functions

export const getToppers = () => get( 'get_toppers.php' );