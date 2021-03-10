export default {
    data() {
        return {
            id_user: null,
            
        }
    },
    method: {
        setTotalKeranjang() {
            this.id_user = localStorage.getItem('id_user');
            const uri = this.$apiUrl+'/totalPesanan'+'?id_user='+this.id_user; 
            this.$http.get(uri).then((response)=>this.setJumlahPesanan(response.data))
            .catch((error) => {
                console.log(error);
        });
        }
    }
}