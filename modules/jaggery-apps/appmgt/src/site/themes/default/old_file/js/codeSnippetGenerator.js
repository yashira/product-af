/*This generates code snippets depending on the language and the section (Datasources,APIs,Properties). This has been written with scalability in mind.
 * When a new language and or section is introduced */

var codeSnippet = codeSnippet || {};
(function () {
codeSnippet.generate=function(language,section,applicationKey,PropertyName,details){
    var methodName="get"+language+"CodeFor"+section;
    var result;
    if((details==null)||(details==undefined)){
        try{
            result=window[methodName](applicationKey, PropertyName);
        }catch(error){
           return undefined;
        }
    }else{
        try{
            result=window[methodName](applicationKey, PropertyName,details);
        }catch(error){
            return undefined;
        }
    }
    return result;
};
}());

var getJavaCodeForApiKeys = function (appplicationKey, apiName){
    var code = '';
    code = '<pre class="clipboard">'
           +'import org.wso2.carbon.registry.core.exceptions.RegistryException;</br>'
           +'import org.wso2.carbon.registry.core.utils.RegistryUtils;</br>'
           +'import org.wso2.carbon.context.CarbonContext;</br>'
           +'import org.wso2.carbon.context.RegistryType;</br>'
           +'import org.wso2.carbon.registry.core.Registry;</br>'
           +'import org.wso2.carbon.registry.core.Resource;</br></br>'
           +'CarbonContext cCtx = CarbonContext.getThreadLocalCarbonContext();</br>'
           +'Registry registry = (Registry) cCtx.getRegistry(RegistryType.SYSTEM_GOVERNANCE);</br>'
           +'try{</br>'
           +'String consumerkey = "";</br>'
           +'String consumerKeyPath = "dependencies/' + appplicationKey + '/ConsumerKey";</br>'
           +'          if (registry.resourceExists(consumerKeyPath)) {</br>'
           +'                  Resource resource = registry.get(consumerKeyPath);</br>'
           +'                  if (resource.getContent() != null) {</br>'
           +'                        if (resource.getContent() instanceof String) {</br>'
           +'                                consumerkey = (String) resource.getContent();</br>'
           +'                        } else if (resource.getContent() instanceof byte[]) {</br>'
           +'                                consumerkey = new String((byte[]) resource.getContent());</br>'
           +'                        }</br>'
           +'                   }</br>'
           +'           } else {</br>'
           +'                  consumerkey = "consumerkey doesn\'t exists";</br>'
           +'           }</br></br>'
           +'String consumerSecret = "";</br>'
           +'String consumerSecretPath = "dependencies/' + appplicationKey + '/ConsumerSecret";</br>'
           +'          if (registry.resourceExists(consumerSecretPath)) {</br>'
           +'                  Resource resource = registry.get(consumerSecretPath);</br>'
           +'                  if (resource.getContent() != null) {</br>'
           +'                        if (resource.getContent() instanceof String) {</br>'
           +'                                consumerSecret = (String) resource.getContent();</br>'
           +'                        } else if (resource.getContent() instanceof byte[]) {</br>'
           +'                                consumerSecret = new String((byte[]) resource.getContent());</br>'
           +'                        }</br>'
           +'                   }</br>'
           +'           } else {</br>'
           +'                  consumerkey = "consumerSecret doesn\'t exists";</br>'
           +'           }</br>'
           +'}catch(RegistryException e) {</br>'
           +'       consumerkey = "Unable to read the resource content";</br>'
           +'}</br>'
           +'</pre>';
    return code;
}

var getJavaCodeForProperties=function(applicaitonKey,propertyName){
    var code='';
    code='<pre class="clipboard">'
          +'import org.wso2.carbon.registry.core.exceptions.RegistryException;</br>'
          +'import org.wso2.carbon.registry.core.utils.RegistryUtils;</br>'
          +'import org.wso2.carbon.context.CarbonContext;</br>'
          +'import org.wso2.carbon.context.RegistryType;</br>'
          +'import org.wso2.carbon.registry.core.Registry;</br>'
          +'import org.wso2.carbon.registry.core.Resource;</br></br>'  
          +'String propValue = "";</br>'
          +'String resourcePath = "/dependencies/'+applicaitonKey+'/'+propertyName+'";</br>'
          +'CarbonContext cCtx = CarbonContext.getThreadLocalCarbonContext();</br>' 
          +'Registry registry = (Registry) cCtx.getRegistry(RegistryType.SYSTEM_GOVERNANCE);</br>'
          +'try{</br>'
          +'          if (registry.resourceExists(resourcePath)) {</br>'
          +'                  Resource resource = registry.get(resourcePath);</br>'
          +'                  if (resource.getContent() != null) {</br>'
          +'                        if (resource.getContent() instanceof String) {</br>'
          +'                                propValue = (String) resource.getContent();</br>'
          +'                        } else if (resource.getContent() instanceof byte[]) {</br>'
          +'                                propValue = new String((byte[]) resource.getContent());</br>'
          +'                        }</br>'
          +'                   }</br>'
          +'           } else {</br>'
          +'                  propValue ="'+propertyName+'property doesn\'t exists";</br>'
          +'           }</br>'
          +'}catch(RegistryException e) {</br>'
          +'       propValue = "Unable to read the resource content";</br>'
          +'}</br>'
          +'</pre>';
      return code;   
    
    
};

var getApiReadValuesMethod=function(applicaitonKey,apiName){
    console.log("in api method");
    console.log(applicaitonKey);
    var code='';
    code='<pre class="clipboard">'
          +'private String getApiValues(String propertyName){</br>' 
          +'    String propValue = "";</br>'
          +'    string resourcePath = "/dependencies/'+applicaitonKey+'/'+apiName+'/"+propertyName;</br>'
          +'    CarbonContext cCtx = CarbonContext.getThreadLocalCarbonContext();</br>' 
          +'    Registry registry = (Registry) cCtx.getRegistry(RegistryType.SYSTEM_GOVERNANCE);</br>'
          +'    try{</br>'
          +'              if (registry.resourceExists(resourcePath)) {</br>'
          +'                      Resource resource = registry.get(resourcePath);</br>'
          +'                      if (resource.getContent() != null) {</br>'
          +'                            if (resource.getContent() instanceof String) {</br>'
          +'                                    propValue = (String) resource.getContent();</br>'
          +'                            } else if (resource.getContent() instanceof byte[]) {</br>'
          +'                                    propValue = new String((byte[]) resource.getContent());</br>'
          +'                            }</br>'
          +'                     }</br>'
          +'            } else {</br>'
          +'                   propValue =propertyName+"property doesn\'t exists";</br>'
          +'            }</br>'
          +'    }catch(RegistryException e) {</br>'
          +'           propValue = "Unable to read the resource content";</br>'
          +'    }</br>'
          +'return propValue</br>'
          +'}</br>'
          +'</pre>';
      return code;   
    
    
};

var getJavaCodeForDatasources=function(applicaitonKey,propertyName){
    var code='';
    code='<pre class="clipboard">'
          +'import javax.naming.InitialContext;</br>'
          +'import javax.naming.NamingException;</br>'
          +'import javax.sql.DataSource;</br></br>'  
          +'DataSource dataSource = null;</br>'
          +'try {</br>' 
          +'    InitialContext context = new InitialContext();</br>'
          +'    dataSource = (DataSource) context.lookup("jdbc/'+propertyName+'");</br>'
          +'} catch (NamingException e) {</br>'
          +'    e.printStackTrace();</br>'
          +'}</br>'
          +'return dataSource;</br>'
          +'</pre>';  
    
    return code;   
    
};
var getJavaCodeForApis=function(applicaitonKey,propertyName,info){
    var code='';
    var name=info.name;
    var authentication=info.authentication;

    if (authentication == "none") {

        code = '<pre class="clipboard">'
        + 'import java.io.IOException;</br>'
        + 'import org.apache.http.HttpResponse;</br>'
        + 'import org.apache.http.client.methods.HttpPost;</br>'
        + 'import org.wso2.carbon.registry.core.exceptions.RegistryException;</br>'
        + 'import org.wso2.carbon.registry.core.utils.RegistryUtils;</br>'
        + 'import org.wso2.carbon.context.CarbonContext;</br>'
        + 'import org.wso2.carbon.context.RegistryType;</br>'
        + 'import org.wso2.carbon.registry.core.Registry;</br>'
        + 'import org.wso2.carbon.registry.core.Resource;</br>'
        + 'import org.apache.http.impl.client.HttpClientBuilder;</br>'
        + 'String url = getApiValues("url");</br>'
        + 'HttpClient client = HttpClientBuilder.create().build();</br>'
        + 'HttpPost post = new HttpPost(url);</br>'
        + 'HttpResponse response;</br>'
        + 'try {</br></br>'
        + '    response=client.execute(post);</br>'
        + '} catch (IOException e) {</br>'
        + '    e.printStackTrace();</br>'
        + '}</br></br>'

        + '    ' + getApiReadValuesMethod(applicaitonKey, name)
        + '</br>'
        + '</pre>';
        return code;
    } else if (authentication == "token") {
        code = '<pre class="clipboard">'
        + 'import java.io.IOException;</br>'
        + 'import org.apache.http.HttpResponse;</br>'
        + 'import org.apache.http.client.methods.HttpPost;</br>'
        + 'import org.wso2.carbon.registry.core.exceptions.RegistryException;</br>'
        + 'import org.wso2.carbon.registry.core.utils.RegistryUtils;</br>'
        + 'import org.wso2.carbon.context.CarbonContext;</br>'
        + 'import org.wso2.carbon.context.RegistryType;</br>'
        + 'import org.wso2.carbon.registry.core.Registry;</br>'
        + 'import org.wso2.carbon.registry.core.Resource;</br>'
        + 'import org.apache.http.impl.client.HttpClientBuilder;</br>'
        + 'String url = getApiValues("url");</br>'
        + 'String token = getApiValues("token");</br>'
        + 'HttpClient client = HttpClientBuilder.create().build();</br>'
        + 'HttpPost post = new HttpPost(url);</br>'
        + 'post.addHeader("Authorization","Bearer "+token);</br>'
        + 'HttpResponse response;</br>'
        + 'try {</br></br>'
        + '    response=client.execute(post);</br>'
        + '} catch (IOException e) {</br>'
        + '    e.printStackTrace();</br>'
        + '}</br></br>'

        + '    ' + getApiReadValuesMethod(applicaitonKey, name)
        + '</br>'
        + '</pre>';
        return code;

    } else if (authentication == "oauth") {
        code = '<pre class="clipboard">'
        + 'import java.io.IOException;</br>'
        + 'import org.apache.http.HttpResponse;</br>'
        + 'import org.apache.http.client.methods.HttpPost;</br>'
        + 'import org.apache.axiom.util.base64.Base64Utils;</br>'
        + 'import org.wso2.carbon.registry.core.exceptions.RegistryException;</br>'
        + 'import org.wso2.carbon.registry.core.utils.RegistryUtils;</br>'
        + 'import org.wso2.carbon.context.CarbonContext;</br>'
        + 'import org.wso2.carbon.context.RegistryType;</br>'
        + 'import org.wso2.carbon.registry.core.Registry;</br>'
        + 'import org.wso2.carbon.registry.core.Resource;</br>'
        + 'import org.apache.http.impl.client.HttpClientBuilder;</br>'
        + 'String url = getApiValues("url");</br>'
        + 'String consumer_key = getApiValues("consumer_key");</br>'
        + 'String consumer_secret = getApiValues("consumer_secret");</br>'
        + 'String encodeStr = consumer_key + ":" + consumer_secret;</br>'
        + 'String token = Base64Utils.encode(encodeStr.getBytes());</br>'
        + 'HttpClient client = HttpClientBuilder.create().build();</br>'
        + 'HttpPost post = new HttpPost(url);</br>'
        + 'post.addHeader("Authorization","Basic " + token);</br>'
        + 'HttpResponse response;</br>'
        + 'try {</br></br>'
        + '    response=client.execute(post);</br>'
        + '} catch (IOException e) {</br>'
        + '    e.printStackTrace();</br>'
        + '}</br></br>'

        + '    ' + getApiReadValuesMethod(applicaitonKey, name)
        + '</br>'
        + '</pre>';
        return code;

    } else if (authentication == "basic") {
        code = '<pre class="clipboard">'
        + 'import java.io.IOException;</br>'
        + 'import org.apache.http.HttpResponse;</br>'
        + 'import org.apache.http.client.methods.HttpPost;</br>'
        + 'import org.apache.axiom.util.base64.Base64Utils;</br>'
        + 'import org.wso2.carbon.registry.core.exceptions.RegistryException;</br>'
        + 'import org.wso2.carbon.registry.core.utils.RegistryUtils;</br>'
        + 'import org.wso2.carbon.context.CarbonContext;</br>'
        + 'import org.wso2.carbon.context.RegistryType;</br>'
        + 'import org.wso2.carbon.registry.core.Registry;</br>'
        + 'import org.wso2.carbon.registry.core.Resource;</br>'
        + 'import org.apache.http.impl.client.HttpClientBuilder;</br>'
        + 'String url = getApiValues("url");</br>'
        + 'String username = getApiValues("username");</br>'
        + 'String password = getApiValues("password");</br>'
        + 'String encodeStr = username + ":" + password;</br>'
        + 'String token = Base64Utils.encode(encodeStr.getBytes());</br>'
        + 'HttpClient client = HttpClientBuilder.create().build();</br>'
        + 'HttpPost post = new HttpPost(url);</br>'
        + 'post.addHeader("Authorization","Basic " + token);</br>'
        + 'HttpResponse response;</br>'
        + 'try {</br></br>'
        + '    response=client.execute(post);</br>'
        + '} catch (IOException e) {</br>'
        + '    e.printStackTrace();</br>'
        + '}</br></br>'

        + '    ' + getApiReadValuesMethod(applicaitonKey, name)
        + '</br>'
        + '</pre>';
        return code;
    }
};

var getShCodeForBuildAndRepo = function(applicationKey, name,details){
    var gitURL = details.gitURL;
    var gitURLForked = details.gitURLForked;
    var appVersion = details.appVersion;
    if(appVersion === 'trunk'){
        appVersion = 'master';
    }
   // var version = details.selectedAppVersion;
    var commands =  '<pre class="clipboard">#Git commands to get the diff from forked repository against master</br>'+
        'git clone ' + gitURL +' </br>'+
        'Go to ' + applicationKey + ' folder</br>'+
        'git checkout ' + appVersion + ' </br>'+
        'git remote add -f b ' + gitURLForked + '</br>'+
        'git diff origin/' + appVersion + ' remotes/b/' + appVersion + ' > /tmp/' + applicationKey + '.diff</br>' +
        '<p></p>'+
        '#Apply the diff</br>'+
        'git apply /tmp/' + applicationKey +'.diff</br>'+
        'git add * </br>'+
        'git commit -m ""</br>'+
        'git push</br>' +
        '</pre>';

    return commands;
};

var getjaggeryCodeForProperties = function(appKey, propertyName, details){
    var tenantDomain = details.tenantDomain;
    var tenantId = details.tenantId;
    var loggedinUser = details.loggedinUser;
    var code = '';

    code='<pre class="clipboard">'
        +'var carbon = require(\'carbon\');</br>'
        +'var requestUrl = request.getRequestURL();</br>'
        +'var hostName = requestUrl.split(":")[1].split("/")[2];</br>'
        +'var port = requestUrl.split(":")[2].split("/")[0];</br>'
        +'var url = \'http://\' + hostName + \':\' + port + \'/admin/services/\';</br>'
        +'var server = new carbon.server.Server(url);</br>'
        +'var options = {username: \'' + loggedinUser.split("@")[0] + '\',  domain:\''+ tenantDomain + '\' , tenantId:' + tenantId + '};</br>'
        +'var registry = new carbon.registry.Registry(server, options);</br>'
        +'var path =\'/_system/governance/dependencies/jaggeryappnew/testprop\'; </br>'
        +'var retrivedresource = registry.get(path);</br>'
        +'print(\'Retrived Resource : \');</br>'
        +'print(String(retrivedresource.content))</br>'
        +'</pre>';
    return code;
};

