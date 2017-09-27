
<!-- saved from url=(0038)http://tw-sunny.com/c-contact%20us.htm -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="Content-Language" content="zh-tw">

<?php


if($_POST["btnsubmit"]!="")
{
	
	if($_POST['name']=="")
	{
			echo '<script language="javascript">';
    		echo 'alert("請輸入性名")';
			echo '</script>';
	}
	else if($_POST['email']=="")
	{
			echo '<script language="javascript">';
    		echo 'alert("請輸入e-mail!!")';
			echo '</script>';
	}
	else
	{
	
	    $subject = "網站提問";
		$msg="你好:\n有人向您的網站提問(來自於tw-sunny.com)，其提供的資料有\n\n";
		$msg =$msg."姓名:".$_POST['name']."\n";
		$msg =$msg."性別:".$_POST['sex']."\n";
		$msg =$msg."電話:".$_POST['tel']."\n";
		$msg =$msg."手機:".$_POST['cellphone']."\n";
		$msg =$msg."e-mail:".$_POST['email']."\n";
		$msg =$msg."地址:(".$_POST['post'].")".$_POST['address']."\n";
		$msg =$msg."備註:".$_POST['remark']."\n";
		$headers = "From: ".$_POST['email'];
/*	
		if(mail("suntechnn@yahoo.com.tw","$subject", "$msg", "$headers"))
		{
			echo '<script language="javascript">';
    		echo 'alert("非常感謝您的提問，我們收到後將會盡快回覆您的!!")';
			echo '</script>';
		}
*/		
//*******************************************************************************		
		include('Mail.php');

        $recipients = array( 'suntechnn@yahoo.com.tw','kkii335522@gmail.com' ); # Can be one or more emails

        $headers = array (
            'From' => $_POST['email'],
            'To' => join(', ', $recipients),
            'Subject' => $subject,
        );

        $body = $msg;

        $mail_object =& Mail::factory('smtp',
            array(
                'host' => 'prwebmail',
                'auth' => true,
                'username' => 'mysunnywebproject',
                'password' => 'sskk901254', # As set on your project's config page
                #'debug' => true, # uncomment to enable debugging
            ));

        if($mail_object->send($recipients, $headers, $body))
		{
			echo '<script language="javascript">';
    		echo 'alert("非常感謝您的提問，我們收到後將會盡快回覆您的!!")';
			echo '</script>';			
		}
		else
		{
			echo '<script language="javascript">';
    		echo 'alert("抱歉傳送失敗,請稍後再試!!")';
			echo '</script>';
		}
		
	}
}

?>

<title>勝立科技有限公司-主要產品有倒車雷達感測元件(密閉式超音波換能器)與家庭自動化控制器等。</title>
<meta name="description" content="產品有倒車雷達感測元件、密閉式超音波換能器、家庭自動化控制器等。">
<meta name="keywords" content="倒車雷達感測元件、密閉式超音波換能器、家庭自動化控制器、PIR紅外線感應點燈開關。">
</head>

<body leftmargin="0" topmargin="0" marginheight="0" marginwidth="0" bgcolor="#ffffff" background="./contactus_files/bg.gif">

<div align="center">
	<table border="0" width="980" cellspacing="1">
		<tbody><tr>
			<td bgcolor="#DDF2FE">
				<iframe src="../images/aa5.html" width="980" height="185"></iframe>
				</td>
		</tr>
		<tr>
                <td height="31" bgcolor="#DDF2FE" background="./contactus_files/g40.gif">
						<p align="center"><font color="#FFFFFF">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
						<a href=".." style="text-decoration: none">
						<font color="#FFFFFF">關於我們</font></a> <i>&nbsp;&nbsp;</i></font><font size="2"><strong style="LETTER-SPACING: 2px; FONT-WEIGHT: 400">||</strong></font><i>&nbsp;<font color="#FFFFFF">
						</font>
						</i><font color="#FFFFFF">
						<a href="autocontrol1.php" style="text-decoration: none">
						<font color="#FFFFFF">家庭自動化</font></a>&nbsp; <i>&nbsp;</i></font><font size="2"><strong style="LETTER-SPACING: 2px; FONT-WEIGHT: 400">||</strong></font><font color="#FFFFFF"><i>&nbsp; </i>
						<a href="sensor1.php" style="text-decoration: none">
						<font color="#FFFFFF">超音波換能器</font></a><i>&nbsp;&nbsp; &nbsp;</i></font><font size="2"><strong style="LETTER-SPACING: 2px; FONT-WEIGHT: 400">||</strong></font><i>
						</i><font color="#FFFFFF">
						<i>&nbsp; </i>
						<a href="../news/" style="text-decoration: none">
						<font color="#FFFFFF">最新消息</font></a> <i>&nbsp; 
						</i></font><font size="2"><strong style="LETTER-SPACING: 2px; FONT-WEIGHT: 400">||</strong></font><font color="#FFFFFF"><i>&nbsp;
						</i>
						<a  style="text-decoration: none">
						<font color="#FFFFFF">聯絡我們</font></a><i>&nbsp; &nbsp;</i></font><font size="2"><strong style="LETTER-SPACING: 2px; FONT-WEIGHT: 400">||</strong></font><i>
						</i><font color="#FFFFFF">
						<i>&nbsp;</i>&nbsp;<a href="indexE.php" style="text-decoration: none"><font color="#FFFFFF">ENGLISH</font></a><i>&nbsp;&nbsp;
						&nbsp;&nbsp;
						</i></font></p></td>
              </tr>
		<tr>
			<td bgcolor="#DDF2FE">
			<table border="0" width="100%" cellspacing="0" cellpadding="0">
				<tbody><tr>
					<td width="99%">
                  <p align="center">
                  <br>
                  <font color="#000080">
					<font face="標楷體" size="5"><b>‧‧</b></font><b><font size="5" face="標楷體">聯絡我們</font></b><font face="標楷體" size="5"><b>‧‧</b></font></font></p>
					<div align="center">
						<table border="0" width="750" cellspacing="1" cellpadding="0" height="421">
							<tbody><tr>
								<td>
									<div align="center">
							<table border="0" width="80%" cellspacing="0" cellpadding="0">
						<tbody><tr>
							<td width="41%">


<p align="center">


　</p></td>
							<td width="51%">
							<p style="line-height: 150%">
							　</p></td>
						</tr>
						<tr>
							<td width="95%" colspan="2">

<p style="line-height: 150%" align="center">
<font class="sbody">
<font size="2" color="#000080"><b>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </b>
非常高興您光臨我們公司的網站，感謝您的支持，如對本公司有任何意見，<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
歡迎在此留下您寶貴的建議，請您填寫下面的表單，本公司將</font></font><font size="2" color="#000080">儘速與您連絡。</font></p>

                  <table border="0" width="100%" cellspacing="6" cellpadding="5" height="211">     
                    <tbody><tr>     
                      <td width="100%">      
                             
                        <!--webbot BOT="GeneratedScript" PREVIEW=" " startspan --><script language="JavaScript" type="text/javascript"><!--
function FrontPage_Form1_Validator(theForm)
{

  var checkOK = "0123456789-.,";
  var checkStr = theForm.tel.value;
  var allValid = true;
  var validGroups = true;
  var decPoints = 0;
  var allNum = "";
  for (i = 0;  i < checkStr.length;  i++)
  {
    ch = checkStr.charAt(i);
    for (j = 0;  j < checkOK.length;  j++)
      if (ch == checkOK.charAt(j))
        break;
    if (j == checkOK.length)
    {
      allValid = false;
      break;
    }
    if (ch == ".")
    {
      allNum += ".";
      decPoints++;
    }
    else if (ch == "," && decPoints != 0)
    {
      validGroups = false;
      break;
    }
    else if (ch != ",")
      allNum += ch;
  }
  if (!allValid)
  {
    alert("在 \"請填寫聯絡電話\" 欄位，只能輸入 數字 字元。");
    theForm.tel.focus();
    return (false);
  }

  if (decPoints > 1 || !validGroups)
  {
    alert("請在 \"聯絡電話\" 欄位輸入一有效數字。");
    theForm.tel.focus();
    return (false);
  }

  var checkOK = "0123456789-.,";
  var checkStr = theForm.cellphone.value;
  var allValid = true;
  var validGroups = true;
  var decPoints = 0;
  var allNum = "";
  for (i = 0;  i < checkStr.length;  i++)
  {
    ch = checkStr.charAt(i);
    for (j = 0;  j < checkOK.length;  j++)
      if (ch == checkOK.charAt(j))
        break;
    if (j == checkOK.length)
    {
      allValid = false;
      break;
    }
    if (ch == ".")
    {
      allNum += ".";
      decPoints++;
    }
    else if (ch == "," && decPoints != 0)
    {
      validGroups = false;
      break;
    }
    else if (ch != ",")
      allNum += ch;
  }
  if (!allValid)
  {
    alert("在 \"請填寫行動電話\" 欄位，只能輸入 數字 字元。");
    theForm.cellphone.focus();
    return (false);
  }

  if (decPoints > 1 || !validGroups)
  {
    alert("請在 \"行動電話\" 欄位輸入一有效數字。");
    theForm.cellphone.focus();
    return (false);
  }
  return (true);
}
//--></script><!--webbot BOT="GeneratedScript" endspan --><form method="POST" onSubmit="return FrontPage_Form1_Validator(this)" language="JavaScript" name="FrontPage_Form1" action="contactus.php">     
                          <div align="center">      
                              <table width="120%" border="0" bordercolor="#FFFFFF" style="border-collapse: collapse" cellpadding="2">     
                                <tbody><tr>      
                                  <td width="150" align="right" height="20">      
                                    <font size="2">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 名:
									</font>     
                                  </td>     
                                  <td width="533" height="20">      
                                    <font size="3">      
                                    <input name="name"  type="text" id="name" size="20" value="<?php echo $_POST['name'];?>" ></font><font size="2">&nbsp; 性別&nbsp;          
                                    <input type="radio" value="男" id="rman" checked="" name="sex">男<font size="3"><input type="radio" id="rwoman" value="女" name="sex"></font>女 
									</font>         
                                  </td>      
                                </tr>      
                                <tr>       
                                  <td width="150" align="right" height="19">       
                                    <font size="2">聯絡電話:&nbsp; </font>      
                                  </td>      
                                  <td width="533" height="19">       
                                    <font size="3">
									<!--webbot bot="Validation" s-display-name="請填寫聯絡電話" s-data-type="Number" s-number-separators=",." --><input name="tel" type="text" id="tel"value="<?php echo $_POST['tel'];?>" size="20"></font><font size="2">
									</font><font size="2" color="#cc3300">﹝請加區域號碼 ﹞</font></td>      
                                </tr>      
                                <tr>       
                                  <td width="150" align="right" height="19">       
                                    <font size="2">行動電話:&nbsp; </font>      
                                  </td>      
                                  <td width="533" height="19">       
                                    <font size="3">
									<!--webbot bot="Validation" s-display-name="請填寫行動電話" s-data-type="Number" s-number-separators=",." --><input name="cellphone" value="<?php echo $_POST['cellphone'];?>" type="text" id="cellphone" size="20"></font><font size="2">&nbsp;
                                    </font></td>                              
                                </tr>      
                                <tr>       
                                  <td width="150" align="right" height="19">       
                                    <font size="2">E -mail:&nbsp; </font>      
                                  </td>      
                                  <td width="533" height="19">       
                                    <font size="3">       
                                    <input name="email"value="<?php echo $_POST['email'];?>" id="email"  type="email" size="53"></font><font size="2">
									</font>      
                                  </td>      
                                </tr>      
                                <tr>       
                                  <td width="150" align="right" height="19">       
                                    <font size="2">郵遞區號:&nbsp;      
                                  </font>      
                                  </td>      
                                  <td width="533" height="19">       
                                    <font size="3"><input size="6" type="text" id="post" value="<?php echo $_POST['post'];?>" name="post"></font><font size="2">
									</font>      
                                  </td>      
                                </tr>      
                                <tr>     
                                  <td width="150" align="right" height="1">     
                                    <font size="2">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 址: </font></td>    
                                  <td width="533" height="1">     
                                    <font size="3">     
                                    <input name="address" type="text" value="<?php echo $_POST['address'];?>" id="address"size="53"></font></td>    
                                </tr>    
                                <tr>     
                                  <td width="150" align="right" height="1">     
                                    <font size="2">備註留言:</font></td>    
                                  <td width="533" height="1">     
                                    <font size="3">     
                                    <textarea name="remark" rows="6"  id="remark" cols="51"><?php echo $_POST['remark'];?></textarea></font><font size="2">
									</font>    
                                  </td>    
                                </tr>    
                                <tr>     
                                  <td width="677" colspan="2" valign="middle" align="center" height="37">     
                                    <p align="center"><br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                                    <input name="btnsubmit" id="btnsubmit" type="submit" value="填好了!送出">&nbsp;&nbsp;&nbsp;    
                            <input type="reset" value="重新填寫">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     
                                  </p></td>    
                                </tr>    
                              </tbody></table>
  
                          </div>    
                          <input type="hidden" name="recipient" value="service@tw-sunny.com">
                          <input type="hidden" name="redirect" value="http://www.tw-sunny.com/thank.htm">
                          <input type="hidden" name="subject" value="勝立科技有限公司線上留言">    
                        </form>    
                      </td>    
                    </tr>    
                  </tbody></table>    
<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script><script src="./contactus_files/ga.js" type="text/javascript"></script>
<script type="text/javascript">
var pageTracker = _gat._getTracker("UA-3885557-7");
pageTracker._initData();
pageTracker._trackPageview();
</script>                
							</td>
						</tr>
						</tbody></table>
									</div>
								</td>
							</tr>
						</tbody></table>
					</div>
					<table border="0" width="100%" cellspacing="1">
				<tbody><tr>
					<td width="319">
					　</td>
					<td>　</td>
				</tr>
				<tr>
					<td width="319">
					　</td>
					<td><span class="navText"><b><font face="Arial" size="2">
					地址:台南市北區和緯路四段117巷4號</font></b></span></td>
				</tr>
				<tr>
					<td width="319">
					<p align="right">　</p></td>
					<td><b><span class="navText"><font size="2" face="Arial">
					Tel: 886-6-2580620&nbsp; </font></span></b></td>
				</tr>
				<tr>
					<td width="319">　</td>
					<td><b><span class="navText"><font size="2" face="Arial">
					Fax:886-6-2596497</font></span></b><font face="Arial"><b><span class="navText"><font size="2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
					E-mail:
					<a style="text-decoration: none" href="mailto:suntechnn@yahoo.com.tw">
					<font color="#000000">suntechnn@yahoo.com.tw</font></a></font></span></b></font></td>
				</tr>
				</tbody></table>
					<table border="0" width="100%">
						<tbody><tr>
							<td>
							<p align="center">
							　</p>
							</td>
						</tr>
						</tbody></table>
					</td>
				</tr>
			</tbody></table>
			</td>
		</tr>
	</tbody></table>
</div>

  


</body></html>