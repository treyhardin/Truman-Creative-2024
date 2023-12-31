export default function Icon({ glyph }) {

  switch (glyph) {
    case "star":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 168 168">
          <path fill="currentColor" vector-effect="non-scaling-stroke" d="M0 84c46.392 0 84-37.608 84-84 0 46.392 37.608 84 84 84-46.392 0-84 37.608-84 84 0-46.392-37.608-84-84-84Z"/>
        </svg>
      )
    case "arrowBack":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 86 168">
          <path stroke="currentColor" vector-effect="non-scaling-stroke" stroke-linejoin="round" d="M85 0c0 46.392-37.608 84-84 84 46.392 0 84 37.608 84 84"/>
        </svg>
      )
    case "arrowDiagonal":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36">
          <path stroke="currentColor" vector-effect="non-scaling-stroke" d="M1 1h34m0 0v34m0-34L1 35"/>
        </svg>
      )


     


  }
}