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
  try{
  const result = {
    unix:new Date(datestring).getTime()/1000,
    utc: new Date(datestring).toUTCString()
  }
  if(result.utc !=="Invalid Date" && isNaN(result.unix))
  res.send(result)
  else
  return res.send({msg:"invalid request"})

}
  catch(error)
  {
   return  res.sendStatus(502).send({msg:error})
  }
}

module.exports = {
  unixutcdate,currenttime
}
