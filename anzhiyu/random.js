var posts=["2023/05/09/01-someword/","2023/09/13/SQL/","2023/05/22/Png2Webp/","2023/12/12/centos_yum/","2023/06/05/change-table/","2023/08/02/express01/","2023/06/13/fineBI/","2023/05/09/firewall/","2023/09/21/fr1101/","2023/09/21/fr1102/","2023/09/27/fr1104/","2023/11/16/geojson/","2023/09/27/fr1103/","2023/05/09/hello-world/","2023/06/02/kotlin-file/","2023/11/14/hexo_post_order/","2023/05/09/linux-user-manegement/","2023/05/11/miraibot01/","2023/05/16/miraibot02/","2023/06/05/miraibot04/","2023/06/27/miraibot05/","2023/06/02/miraibot03/","2023/07/19/miraibot08/","2023/06/29/miraibot06/","2023/07/07/miraibot07/","2023/08/02/miraibot09/","2023/05/10/nodejs-install/","2023/07/12/oracle-tns/","2023/06/28/oracle_pivot/","2023/08/02/oracledatabase-sga/","2023/07/11/toad4oracle/","2023/07/19/qieru/","2024/03/08/my183daylife/","2023/05/09/vite-proxy/","2023/05/10/vscode-server/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};