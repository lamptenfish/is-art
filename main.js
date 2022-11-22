const provider = new ethers.providers.Web3Provider(window.ethereum);
//Meta Mask is out provider in this case
    
    // You (whoever is signed into MetaMask) is the signer
    const signer = provider.getSigner();

    //the 'contract' object allows us to call functions from our smart contract
    const contract = new ethers.Contract(contractAddress, contractABI, provider);

    // the 'contractWithSigner' object allows us to call smart contract functions that
    // require us to send a transaction (like changing a number on the blockchain)
    const contractWithSigner = contract.connect(signer);

   async function init(){
     await provider.send("eth_requestAccounts,[]");
   }

   init();

   //Button
   $('#setNum').click(function(){
    setNum();
   })

   $('#getNum').click(function(){
    getNum();
   })

   setInterval(function(){
    getNum();
   },2000)
    //Function

    

    

    //READING from blockchain

    async function getNum(){

      const myNum = await contract.getNum();

      const convertedNum = +myNum;

      $('#currentNum').text('{convertedNum}')
    }

    //Changing from blockchain

    function setNum(){
     
      const tokenWithSigner = contract.connect(signer);
      console.log("calling function getNum")
      tokenWithSigner.setNum(5);

    }
    