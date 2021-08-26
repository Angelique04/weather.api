import React, { useState } from 'react'
// import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import { getSuggestedPlaces } from '@api/weatherService'
interface Place {
  name: string
}

const SearchCity: React.FC = () => {
  const [places, setPlaces] = useState<Place[]>([])

  const getPlaces = async (input?: string) => {
    const trimmedInput = input?.trim()
    if (trimmedInput && trimmedInput.length > 2) {
      const response = await getSuggestedPlaces(trimmedInput)
      setPlaces(response.data)
    } else {
      setPlaces([])
    }
  }

  // // mount
  // useEffect(() => {
  //   getPlaces()
  // }, [])

  console.log('places:%0 ', places)
  return (
    <div style={{ width: '100%' }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        options={places}
        getOptionLabel={(option) => option.name}
        renderOption={(option) => <>{option.name}</>}
        filterOptions={(options) => options}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search City"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
            size="medium"
            placeholder="Enter a city "
            onChange={(event) => {
              console.log('event.target.value: %0 ', event.target.value)
              getPlaces(event.target.value)
            }}
          />
        )}
      />
    </div>
  )
}

export default SearchCity
