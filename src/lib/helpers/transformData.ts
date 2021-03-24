interface Data {
  points: string
  Constructor: {
    name: string
    nationality: string
  }
  Driver: {
    givenName: string
    familyName: string
  }
}

export const transformData = (data: Data[]) => {
  const transformedData = data.map((res) => {
    return {
      name: res.Driver.givenName + " " + res.Driver.familyName,
      nationality: res.Constructor.nationality,
      team: res.Constructor.name,
      points: res.points
    }
  })

  // console.log(transformedData)
  return transformedData
}
