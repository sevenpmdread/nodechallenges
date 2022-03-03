const currenttime = async (req,res) => {
 try {
 // console.log(Date.now())
 const result = {
   unix: Date.now().toString(),
    utc:new Date().toUTCString()
  }
  await res.send(result)
}
  catch(error){
    return res.sendStatus(400)
  }
}

const unixutcdate = async(req,res) => {
  const datestring = req.params.date
  if(!datestring)
  res.sendStatus(502).send({msg:"invalid request"})
  // if isNan is false then unix is passed
  if(!isNaN(datestring))
  {
    try{
      const result = {
        unix:datestring,
        utc: new Date(datestring*1).toUTCString()
      }
      if(result.utc !=="Invalid Date")
      res.send(result)
      else
      return res.send({msg:"invalid request"})
    }
    catch(error)
    {
     return  res.sendStatus(502).send({msg:error})
    }
  }
  else
  {
    try {
      const result = {
        unix:new Date(datestring).getTime()/1000,
        utc: new Date(datestring).toUTCString()
      }
      if(result.utc !=="Invalid Date")
      res.send(result)
      else
      return res.send({msg:"invalid request"})
    } catch (error) {

    }
  }
}

module.exports = {
  unixutcdate,currenttime
}
